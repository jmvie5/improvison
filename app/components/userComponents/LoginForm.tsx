import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export interface LoginInterface {
    email: string;
    password: string;
}

type LoginProps = {
    formTitle: string;
    initialState: LoginInterface;
    onSubmit: (e: React.FormEvent, newLogin: LoginInterface) => Promise<void>;
};

export default function LoginForm({ formTitle, initialState, onSubmit }: LoginProps) {
    const [form, setForm] = useState<LoginInterface>(initialState);

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
                />

                <div className="flex justify-around my-4 min-w-full">
                    <input type="submit" value="Soumettre" className="btn-primary" />
                    <NavLink to="/" className="btn-primary">
                        Annuler
                    </NavLink>
                </div>
            </form>
        </div>
    );
}
