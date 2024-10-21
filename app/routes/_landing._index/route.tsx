import { json, type LoaderFunctionArgs, type MetaFunction} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { BookOpenIcon, PresentationChartLineIcon, PuzzlePieceIcon, UsersIcon, UserIcon } from '@heroicons/react/24/outline'
import { MusicalNoteIcon } from '@heroicons/react/24/solid'
import { Image, Card, CardHeader, CardBody, CardFooter, Link , Divider} from "@nextui-org/react";
import { motion } from "framer-motion";
import { Roblox_Logo } from "../../static/images"
import i18nextServer from "~/i18next.server";

export async function loader({ request }: LoaderFunctionArgs) {
  
    const t = await i18nextServer.getFixedT(request);
  
    const translations = {
      duoWhat: t('pages.landingIndex.duo.what'),
      duoWhatDesc: t('pages.landingIndex.duo.what-description'),
      duoWho: t('pages.landingIndex.duo.who'),
      duoWhoDesc: t('pages.landingIndex.duo.who-description'),
      soloWhat: t('pages.landingIndex.solo.what'),
      soloWhatDesc: t('pages.landingIndex.solo.what-description'),
      soloWho: t('pages.landingIndex.solo.who'),
      soloWhoDesc: t('pages.landingIndex.solo.who-description'),
    }
  
    return json({ translations });
  }

export default function LandingIndex() {

    const translations = useLoaderData<typeof loader>().translations

    const itemVariants = {
        hidden: { x: 100, opacity: 0 },
        visible: {
          x: 0,
          opacity: 1
        }
      }

    return (
        <motion.div 
            className="flex flex-col gap-4"
            initial='hidden'
            animate='visible'
            variants={{
                hidden: { opacity: 1 },
                visible: {
                  opacity: 1,
                  transition: {
                    delayChildren: 0.1,
                    staggerChildren: 0.3
                  }
                }
              }}
        >
            <motion.div
                variants={itemVariants}
            >
                <Card className="bg-default p-4 shadow-md shadow-black hover:opacity-95" as={Link} href="duo">
                    <CardHeader className="justify-around">
                        <p className="font-bold text-3xl italic">Improvison – Duo </p>
                        <UsersIcon className="w-32 self-center"/>
                    </CardHeader>
                    <Divider className="bg-white"/>
                    <CardBody className="flex gap-2">
                        
                        <div className='flex flex-col'>
                            <h3 className="font-bold text-xl">{translations.duoWhat}</h3>
                            <p>{translations.duoWhatDesc}</p>
                            
                        </div>
                        <div>
                            <h3 className="font-bold text-xl">{translations.duoWho}</h3>
                            <p>{translations.duoWhoDesc}</p>
                        </div>
                    </CardBody>
                </Card>
            </motion.div>
            <motion.div
                variants={itemVariants}
            >
                <Card className="bg-default p-4 shadow-md shadow-black hover:opacity-95" as={Link} href="solo/game">
                    <CardHeader className="justify-around">
                        <p className="font-bold text-3xl italic">Improvison – Solo</p>
                        <UserIcon className="w-32 self-center"/>
                    </CardHeader>
                    <Divider className="bg-white"/>
                    <CardBody className="flex gap-2">
                        
                        <div className='flex flex-col'>
                            <h3 className="font-bold text-xl">{translations.soloWhat}</h3>
                            <p>{translations.soloWhatDesc} </p>
                            
                        </div>
                        <div>
                            <h3 className="font-bold text-xl">{translations.soloWho}</h3>
                            <p>{translations.soloWhoDesc}</p>
                        </div>
                    </CardBody>
                </Card>
            </motion.div>
            
            
            {/* <Card className="bg-bleu-pale/20 p-4 text-white border border-neutral-500 shadow-md shadow-black" isDisabled>
                <CardHeader className="justify-center">
                    <p className="font-bold text-xl">Résultats</p>
                </CardHeader>
                <CardBody>
                    <PresentationChartLineIcon className="w-32 self-center"/>
                </CardBody>
                <CardFooter className="justify-center text-center text-lg">
                    <p>Nous analysons présentement nos données de recherche. Les résultats seront disponibles ici sous peu.</p>
                </CardFooter>
            </Card> */}
        </motion.div>

    );
}
