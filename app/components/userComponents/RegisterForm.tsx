import React, { useState } from "react";
import UserInterface from "./UserInterface";

type RegisterProps = {
    formTitle: string;
    initialState: UserInterface;
    onSubmit: (e: React.FormEvent, newRegistration: UserInterface) => Promise<void>;
};

export default function RegisterForm({ formTitle, initialState, onSubmit }: RegisterProps) {
    const [form, setForm] = useState<UserInterface>(initialState);

    // These methods will update the state properties.
    function updateForm(e: React.ChangeEvent) {
        const { id, value } = e.target as HTMLInputElement;
        return setForm((prev) => ({ ...prev, [id]: value }));
    }

    return (
        <div className="flex flex-col items-center">
            <h3 className="text-xl font-medium my-2">{formTitle}</h3>
            <form
                onSubmit={(e) => onSubmit(e, form)}
                className="flex flex-col  max-w-lg md:max-w-4xl gap-2 items-center border-t py-2"
                autoComplete="off"
            >
                <label htmlFor="username">Nom</label>
                <input
                    type="text"
                    className="mt-1 block w-full px-3 py-2 bg-slate-600 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-slate-400 focus:ring-1 focus:focus:border-slate-400"
                    id="username"
                    value={form.username}
                    name="username"
                    onChange={updateForm}
                    required
                />

                <label htmlFor="email">Courriel</label>
                <input
                    type="text"
                    className="my-1 block w-full px-3 py-2 bg-slate-600 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-slate-400 focus:ring-1 focus:focus:border-slate-400"
                    id="email"
                    value={form.email}
                    onChange={updateForm}
                    required
                />

                <label htmlFor="password">Mot de passe</label>
                <input
                    type="text"
                    className="my-1 block w-full px-3 py-2 bg-slate-600 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-slate-400 focus:ring-1 focus:focus:border-slate-400"
                    id="password"
                    value={form.password}
                    onChange={updateForm}
                    required
                />

                <label htmlFor="password">Instrument principal</label>
                <input
                    type="text"
                    className="my-1 block w-full px-3 py-2 bg-slate-600 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-slate-400 focus:ring-1 focus:focus:border-slate-400"
                    id="mainInstrument"
                    value={form.mainInstrument}
                    onChange={updateForm}
                    required
                />

                <label htmlFor="password">Instrument transpositeur?</label>
                <select
                    name="transposition"
                    className="my-1 block w-full px-3 py-2 bg-slate-600 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-slate-400 focus:ring-1 focus:focus:border-slate-400"
                    id="transposition"
                    value={form.transposition}
                    onChange={updateForm}
                    required
                >
                    <option disabled selected value="">
                        -- Sélectionnez --
                    </option>
                    <option value="C">Non</option>
                    <option value="Bb">Oui, en Si bémol (Bb)</option>
                    <option value="Eb">Oui, en Mi bémol (Eb)</option>
            </select>

                <div className="flex justify-around my-4 min-w-full">
                    <input
                        type="submit"
                        value="Soumettre"
                        className="cursor-pointer border rounded-md border-slate-600 p-2 bg-blue-950 hover:bg-blue-900 shadow-sm shadow-slate-600"
                    />
                </div>
            </form>
        </div>
    );
}
