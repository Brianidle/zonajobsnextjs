import dynamic from "next/dynamic";
import styled from "styled-components";
import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const CKEditor5 = dynamic(() => import("../../src/components/CKEditor5"), {
  ssr: false,
});

const maxNumberOfCharactersDescription = 3500;
const maxNumberOfCharactersTitle = 100;

const Header = styled.div`
  text-align: center;
`;

const PublishJobAdDiv = styled.div`
  width: 100%;
  max-width: 920px;
  margin: 40px auto;
  background-color: white;
`;

const PublishJobAdContent = styled.div`
  padding: 35px 20px;
`;

const PublishAFreeAdTitle = styled.h1`
  font-weight: 700;
  line-height: 30px;
  font-size: 22px;
  color: #535151;
  margin: 0px;
`;

const NumberOfWords = styled.label`
  position: absolute;
  bottom: 5px;
  right: 10px;
  font-size: 14px;
`;

const FreeAdsAvailable = styled.span`
  font-size: 14px;
  color: #212121;
`;

const FormContainer = styled.form`
  margin-top: 20px;
`;

const InputDescription = styled.label`
  display: inline-block;
  font-size: 16px;
  margin-bottom: 5px;
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 0 10px;
  border-radius: 3px;
  border: 1px solid #e5e5e5;
  height: 35px;
  font-size: 14px;

  :focus {
    box-shadow: inset 0 0 5px #66afe9;
  }
`;

const InputsGrid = styled.div`
  display: grid;
  grid-template-columns: calc(50% - 10px) calc(50% - 10px);
  grid-column-gap: 20px;
  grid-row-gap: 20px;

  @media (max-width: 767px) {
    grid-template-columns: 100%;
    grid-column-gap: unset;
  }
`;

const PublishButton = styled.button`
  width: 100%;
  max-width: 220px;
  color: #fff;
  background-color: #ff652b;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 50%);
  border: none;
  cursor: pointer;
  font-family: "Open Sans", sans-serif;
  margin-bottom: 0;
  font-weight: 600;
  padding: 10px 25px;
  font-size: 14px;
  text-transform: uppercase;
  border-radius: 2px;
  margin-top: 30px;
`;

const FormularioGratis = ({apiPath}) => {
  const [inputValues, setInputValues] = useState({
    title: "",
    description: "",
    area: "",
    subArea: "",
    country: "Argentina",
    state: "",
    city: "",
    address: "",
    salary: "",
    modality: "",
    companyName: "",
  });

  const [salaryInputDisable, setSalaryInputDisable] = useState(false);
  const [numberOfCharactersDescription, setNumberOfCharactersEditor] = useState(0);

  const onChange = (event) => {
    setInputValues({ ...inputValues, [event.target.name]: event.target.value });
  };

  const onChangeTitle = (event) => {
    setInputValues({ ...inputValues, title: event.target.value });
  };

  const onChangeCKEditor = (ckeditorData) => {
    setInputValues({ ...inputValues, [ckeditorData.name]: ckeditorData.data });
  };

  const verifyInput = () => {
    return (inputValues.title.length <= maxNumberOfCharactersTitle) && (numberOfCharactersDescription <= maxNumberOfCharactersDescription);
  }

  const router = useRouter();

  return (
    <>
      <Head>
        <title>ZonaJobs</title>
      </Head>
      <PublishJobAdDiv>
        <PublishJobAdContent>
          <Header>
            <PublishAFreeAdTitle>PUBLICÁ UN AVISO GRATIS</PublishAFreeAdTitle>
            <FreeAdsAvailable>Tenés 3 avisos gratis disponibles</FreeAdsAvailable>
          </Header>
          <FormContainer
            onSubmit={(e) => {
              e.preventDefault();

              if (verifyInput()) {
                fetch(apiPath + "/jobAd", {
                  method: "post",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(inputValues),
                });

                router.push("/");
              }
            }}
          >
            <div style={{ marginBottom: "20px", position: "relative" }}>
              <InputDescription htmlFor="title">
                Puesto / Título del aviso
              </InputDescription>
              <Input
                id="title"
                name="title"
                type="text"
                onChange={onChangeTitle}
                value={inputValues.title ?? ""}
                maxLength={maxNumberOfCharactersTitle}
                required
              >
              </Input>
              <NumberOfWords>{inputValues.title.length}/{maxNumberOfCharactersTitle}</NumberOfWords>
            </div>
            <div style={{ marginBottom: "20px" }}>
              <InputDescription htmlFor="description">
                Descripción del puesto
              </InputDescription>
              <CKEditor5 name="description" onChange={onChangeCKEditor} maxNumberOfCharacters={maxNumberOfCharactersDescription} setNumberOfCharactersEditor={setNumberOfCharactersEditor} />
            </div>
            <InputsGrid>
              <div>
                <InputDescription htmlFor="area">Área de empleo</InputDescription>
                <Input
                  id="area"
                  name="area"
                  onChange={onChange}
                  value={inputValues.area ?? ""}
                  required
                ></Input>
              </div>
              <div>
                <InputDescription htmlFor="subArea">
                  Subárea de empleo
                </InputDescription>
                <div>
                  <Input
                    id="subArea"
                    name="subArea"
                    onChange={onChange}
                    value={inputValues.subArea ?? ""}
                    required
                  ></Input>
                </div>
              </div>
              <div>
                <InputDescription htmlFor="country">País</InputDescription>
                <Input
                  id="country"
                  name="country"
                  value={inputValues.country ?? ""}
                  disabled
                ></Input>
              </div>
              <div>
                <InputDescription htmlFor="state">Provincia</InputDescription>
                <Input
                  id="state"
                  name="state"
                  onChange={onChange}
                  value={inputValues.state ?? ""}
                  required
                ></Input>
              </div>
              <div>
                <InputDescription htmlFor="city">Ciudad</InputDescription>
                <Input
                  id="city"
                  name="city"
                  onChange={onChange}
                  value={inputValues.city ?? ""}
                  required
                ></Input>
              </div>
              <div>
                <InputDescription htmlFor="address">Dirección</InputDescription>
                <Input
                  id="address"
                  name="address"
                  onChange={onChange}
                  value={inputValues.address ?? ""}
                  required
                ></Input>
              </div>
              <div>
                <InputDescription htmlFor="salary">Sueldo</InputDescription>
                <Input
                  id="salary"
                  name="salary"
                  onChange={onChange}
                  value={inputValues.salary ?? ""}
                  disabled={salaryInputDisable}
                ></Input>
                <input id="salaryCheckbox" type="checkbox" onClick={() => { setInputValues({ ...inputValues, salary: "" }); setSalaryInputDisable(!salaryInputDisable) }}
                  style={{ margin: "10px 5px 0px 0px" }} /><label htmlFor="salaryCheckbox">No especificado</label>
              </div>
              <div>
                <InputDescription htmlFor="jobType">
                  Tipo de Empleo
                </InputDescription>
                <Input
                  id="jobType"
                  name="jobType"
                  onChange={onChange}
                  value={inputValues.jobType ?? ""}
                  required
                ></Input>
              </div>
              <div>
                <InputDescription htmlFor="modality">
                  Modalidad de Trabajo
                </InputDescription>
                <Input
                  id="modality"
                  name="modality"
                  onChange={onChange}
                  value={inputValues.modality ?? ""}
                  required
                ></Input>
              </div>
              <div>
                <InputDescription htmlFor="companyName">
                  Nombre de la Empresa
                </InputDescription>
                <Input
                  id="companyName"
                  name="companyName"
                  onChange={onChange}
                  value={inputValues.companyName ?? ""}
                  required
                ></Input>
              </div>
              <div>
                <InputDescription htmlFor="urlCompanyLogo">
                  Url del Logo de la Empresa
                </InputDescription>
                <Input
                  id="urlCompanyLogo"
                  name="urlCompanyLogo"
                  onChange={onChange}
                  value={inputValues.urlCompanyLogo ?? ""}
                ></Input>
              </div>
            </InputsGrid>
            <div style={{ textAlign: "center" }}>
              <PublishButton type="submit">PUBLICAR</PublishButton>
            </div>
          </FormContainer>
        </PublishJobAdContent>
      </PublishJobAdDiv>
    </>
  );
};

export async function getStaticProps() {
  let apiPath = process.env.API_PATH;

  return {
    props: { apiPath },
  };
}

export default FormularioGratis;
