import { db } from "../../db";
import {
  Card,
  CardBody,
  CardHeader,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import type { LoaderFunctionArgs } from "@remix-run/node";
import {
  useLoaderData,
  ClientLoaderFunctionArgs,
  useOutletContext,
} from "@remix-run/react";
import { json } from "@remix-run/node";
import i18nextServer from "../../i18next.server";
import { useTranslation } from "react-i18next";

export async function loader({ request }: LoaderFunctionArgs) {
  const t = await i18nextServer.getFixedT(request);

  const title = t("pages.soloProfile.title");
  const description = t("pages.soloProfile.description");

  const translations = {
    recordings: t("pages.soloProfile.recordings"),
    noRecording: t("pages.soloProfile.noRecording"),
    modalBtn: t("pages.soloProfile.modalBtn"),
    modalTitle: t("pages.soloProfile.modal.title"),
    modalContent: t("pages.soloProfile.modal.content"),
    modalCancelBtn: t("pages.soloProfile.modal.cancelBtn"),
    modalActionBtn: t("pages.soloProfile.modal.actionBtn"),
  };

  return json({ title, description, translations });
}

export async function clientLoader({ serverLoader }: ClientLoaderFunctionArgs) {
  const [serverData, clientData] = await Promise.all([
    serverLoader<{
      title: string;
      description: string;
      translations: {
        recordings: string;
        noRecording: string;
        modalBtn: string;
        modalTitle: string;
        modalContent: string;
        modalCancelBtn: string;
        modalActionBtn: string;
      };
      transposition: string;
    }>(),
    {
      recordings: await db.recordings.toArray(),
    },
  ]);

  return {
    title: serverData.title,
    description: serverData.description,
    translations: serverData.translations,
    transposition: serverData.transposition,
    recordings: clientData.recordings,
  };
}

clientLoader.hydrate = true;

export default function SoloProfile() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const { recordings, translations, title } =
    useLoaderData<typeof clientLoader>();

  const transposition: string = useOutletContext();

  const { t, ready } = useTranslation();

  function deleteRecording(id?: number) {
    try {
      if (id) {
        db.recordings.delete(id);
        // console.log("deleted entry");
      } else {
        // console.warn("no entry to delete in db");
      }
    } catch (error) {
      console.warn("Error when deleting recording from db");
    }
  }

  if (!ready) return <></>

  return (
    <div className=" flex flex-col justify-items-center gap-4 p-4">
      <div className="self-center text-4xl font-bold p-4">{title}</div>
      <div className="self-end">Transposition : {transposition}</div>
      <div className="self-end">
        <Button onPress={onOpen} color="danger">
          {translations.modalBtn}
        </Button>

        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          size="xl"
          backdrop="blur"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  {translations.modalTitle}
                </ModalHeader>
                <ModalBody>{translations.modalContent}</ModalBody>
                <ModalFooter>
                  <Button color="primary" onPress={onClose}>
                    {translations.modalCancelBtn}
                  </Button>

                  <Button
                    color="danger"
                    onPress={() => {
                      onClose();
                      if (!recordings) return;
                      for (let i = 0; i < recordings.length; i++) {
                        const r = recordings[i];
                        deleteRecording(r.id);
                      }
                    }}
                  >
                    {translations.modalActionBtn}
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>

      <div>{translations.recordings}</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {recordings && recordings?.length > 0 ? (
          <>
            {recordings.map((record) => {

              const lvlTitle = `${t(`pages.soloGameLevels.${record.tString}.title`)} : ${t(`pages.soloGameLevels.${record.tString}.${record.subLvlName}.title`)}`

              return (
                <Card key={record.id} className=" bg-primary text-white">
                  <CardHeader className="flex justify-between">
                    {lvlTitle}
                    
                    <Button
                      variant="light"
                      isIconOnly
                      onPress={() => deleteRecording(record.id)}
                    >
                      <XMarkIcon className="text-white" />
                    </Button>
                  </CardHeader>
                  <CardBody>
                    {/* eslint-disable-next-line */}
                    <audio
                      className="self-center"
                      src={URL.createObjectURL(record.audioBlob)}
                      controls
                    />
                  </CardBody>
                </Card>
              )})}
          </>
        ) : (
          <div>{translations.noRecording}</div>
        )}
      </div>
    </div>
  );
}
