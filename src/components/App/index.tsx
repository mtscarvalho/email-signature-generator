import { useState, ChangeEvent } from 'react';

import classes from './style.module.css';

import { Header } from 'src/components/Header/';
import { Footer } from 'src/components/Footer';
import { Form } from 'src/components/Form';
import { Input } from 'src/components/Input';
import { Preview } from 'src/components/Preview';
import { Signature } from 'src/components/Signature';
import { Field } from 'src/components/Field';
import { Label } from 'src/components/Label';
import { setPhoneMask } from 'src/lib/utils.js';
import { TUserData, initialUserData } from 'src/lib/data.js';

import useClipboard from 'src/hook/useClipboard';
import useVCard from 'src/hook/useVCard';

export function App() {
  const [userData, setUserData] = useState<TUserData>(initialUserData);
  const { fname, lname, role, department, email, cell, whatsapp } = userData;
  const { vCardLink } = useVCard(userData);
  const { copyToClipboard, isCopied, elementToCopy } = useClipboard();

  const copyCellValueToWhatsApp = () => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      whatsapp: prevUserData.cell,
    }));
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setUserData(initialUserData);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    copyToClipboard();
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
            <Input type="tel" name="cell" value={setPhoneMask(cell)} placeholder="Digite o seu celular" minLength={14} maxLength={15} onChange={handleInputChange} />
          </Field>
          <Field>
            <Label htmlFor="whatsapp">WhatsApp?</Label>
            <button onClick={copyCellValueToWhatsApp} type="button">
              Copiar do celular
            </button>
            <Input type="tel" name="whatsapp" value={whatsapp} placeholder="Digite o seu WhatsApp" minLength={14} maxLength={15} onChange={handleInputChange} />
          </Field>
          <footer>
            <button type="button" onClick={handleSubmit}>
              Copy to Clipboard
            </button>
            <button type="reset" onClick={handleReset}>
              Limpar campos
            </button>
            {isCopied === true && <p>Copied to clipboard!</p>}
            {isCopied === false && <p>Copy to clipboard failed</p>}
          </footer>
        </Form>
        <Preview>
          <div ref={elementToCopy}>
            <Signature data={userData} vCard={vCardLink} />
          </div>
        </Preview>
      </main>
      <Footer />
    </>
  );
}
