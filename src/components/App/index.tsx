import { useState, ChangeEvent } from 'react';

import { Header } from '../Header/index.jsx';
import { Footer } from '../Footer/index.jsx';
import { Form } from '../Form/index.jsx';
import { Input } from '../Input/index.js';
import { Preview } from '../Preview/index.js';
import { Signature } from '../Signature/index.js';

import classes from './style.module.css';
import { Field } from '../Field/index.js';
import { Label } from '../Label/index.js';

export type TUserData = {
  fname: string;
  lname: string;
  role: string;
  department: string;
  email: string;
  cell: string;
  whatsapp: string;
  phone: string;
  extension: string | number;
};

const setPhoneMask = (value: string) => {
  return value
    .replace(/\D/g, '')
    .replace(/^(\d{2})(\d)/g, '($1) $2')
    .replace(/(\d)(\d{4})$/, '$1-$2');
};

export function App() {
  const [userData, setUserData] = useState<TUserData>({
    fname: '',
    lname: '',
    role: '',
    department: '',
    email: '',
    cell: '',
    whatsapp: '',
    phone: '',
    extension: '',
  });

  const { fname, lname, role, department, email, cell, whatsapp, phone, extension } = userData;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;

    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: type === 'tel' ? setPhoneMask(value) : value,
    }));
  };

  const copyCellValueToWhatsApp = () => {
    const cellValue = userData.cell;

    setUserData((prevUserData) => ({
      ...prevUserData,
      whatsapp: cellValue,
    }));
  };

  return (
    <>
      <Header />
      <main className={classes.main}>
        <Form>
          <Field>
            <Label htmlFor="fname">Qual é o seu primeiro nome?</Label>
            <Input type="text" name="fname" value={fname} placeholder="Digite o seu nome" onChange={handleInputChange} />
          </Field>
          <Field>
            <Label htmlFor="lname">E o sobrenome?</Label>
            <Input type="text" name="lname" value={lname} placeholder="Digite o seu sobrenome" onChange={handleInputChange} />
          </Field>
          <Field>
            <Label htmlFor="role">Qual é o seu cargo?</Label>
            <Input type="text" name="role" value={role} placeholder="Digite o seu cargo" onChange={handleInputChange} />
          </Field>
          <Field>
            <Label htmlFor="department">Qual é o seu departamento?</Label>
            <Input type="text" name="department" value={department} placeholder="Digite o seu departamento" onChange={handleInputChange} />
          </Field>
          <Field fullWidth>
            <Label htmlFor="department">E o e-mail?</Label>
            <Input type="text" name="email" value={email} placeholder="Digite o seu e-mail" onChange={handleInputChange} />
          </Field>
          <Field>
            <Label htmlFor="cell">Celular?</Label>
            <Input type="tel" name="cell" value={cell} placeholder="Digite o seu celular" minLength={14} maxLength={15} onChange={handleInputChange} />
          </Field>
          <Field>
            <Label htmlFor="whatsapp">WhatsApp?</Label>
            <button onClick={copyCellValueToWhatsApp} type="button">
              Copiar do celular
            </button>
            <Input type="tel" name="whatsapp" value={whatsapp} placeholder="Digite o seu celular" onChange={handleInputChange} />
          </Field>
          <Field>
            <Label htmlFor="phone">Telefone Fixo?</Label>
            <Input type="tel" name="phone" value={phone} placeholder="Digite o seu celular" minLength={14} maxLength={15} onChange={handleInputChange} />
          </Field>
          <Field>
            <Label htmlFor="extension">Ramal?</Label>
            <Input type="number" name="extension" value={extension} placeholder="Digite o seu celular" onChange={handleInputChange} />
          </Field>
        </Form>
        <Preview>
          <Signature data={userData} />
        </Preview>
      </main>
      <Footer />
    </>
  );
}
