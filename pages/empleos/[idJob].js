import styled from "styled-components";

import JobFeature from "../../src/components/JobFeature";

const paddingRightNLef = "20px";

const JobDetailContent = styled.div`
  width: 100%;
  max-width: 920px;
  margin: 60px auto;
  background: linear-gradient(64deg, #f97072, #ffa164);
`;

const JobTitleNCompanyNameDiv = styled.div`
  padding: 30px ${paddingRightNLef};
  position: relative;
`;

const JobTitle = styled.p`
  font-size: 18px;
  margin: 0px;
`;

const CompanyName = styled.p`
  font-size: 16px;
  margin: 10px 0px;
`;

const LogoCompanyDiv = styled.div`
  position: absolute;
  right: ${paddingRightNLef};
  top: 30px;
  padding: 5px;
  background-color: white;
  border: 1px solid #fe633f;
`;

const JobDescriptionDiv = styled.div`
  background-color: white;
  padding: 20px ${paddingRightNLef};
`;

const JobDescription = styled.div`
  border-top: 2px solid #979797;
  padding-top: 20px;
  margin-top: 20px;
`;

const JobDetailPage = () => {
  return (
    <>
      <JobDetailContent>
        <JobTitleNCompanyNameDiv>
          <JobTitle>Ingeniero especializado en mantenimiento</JobTitle>
          <CompanyName>FATE</CompanyName>
          <LogoCompanyDiv>
            <img src="https://imgzj.jobscdn.com/portal/img/empresas/1/static/logoMainPic_51738_bum_v81e44af0.jpg" />
          </LogoCompanyDiv>
        </JobTitleNCompanyNameDiv>
        <JobDescriptionDiv>
          <div>
            <JobFeature
              featureName="LUGAR DE TRABAJO"
              featureValue="San Fernando, Buenos Aires"
            ></JobFeature>
            <JobFeature
              featureName="PUBLICADO"
              featureValue="Publicado el 14 de junio"
            ></JobFeature>
            <JobFeature
              featureName="SUELDO"
              featureValue="No especificado"
            ></JobFeature>
            <JobFeature
              featureName="TIPO DE PUESTO"
              featureValue="Full-time"
            ></JobFeature>
            <JobFeature
              featureName="ÁREA"
              featureValue="Mantenimiento"
            ></JobFeature>
            <JobFeature
              featureName="MODALIDAD DE TRABAJO"
              featureValue="Presencial"
            ></JobFeature>
          </div>
          <JobDescription>
            Para importante multinacional del rubro lácteos, ubicada en Virrey
            del Pino, nos encontramos en la búsqueda de un Ingeniero de
            Proyectos : Serán sus principales responsabilidades: · Desarrollo e
            implementación de proyectos de inversión industrial (CAPEX) y
            control de avance de los mismos. · Gestión y control de
            documentación técnica. · Interacción con las áreas de producción,
            mantenimiento, sistemas, calidad, seguridad, proveedores externos,
            entre otros, para coordinar actividades solicitadas en las
            implementaciones. · Planificación del trabajo que se debe realizar
            para cumplir las necesidades del Proyecto, según gestión de alcance,
            tiempo e integración. · Organizar el trabajo de los equipos de
            proyecto, evaluar las tareas y actividades realizadas, personas y
            recursos, según los planes establecidos. · Cumplimiento de
            objetivos, participacion en reuniones para gestionar el Proyecto y
            mediar la comunicación entre equipos. · Confeccion de informes sobre
            el estado del proyecto. · Brindar soporte técnico para la
            implementación de proyectos en otras plantas. Son requisitos: ·
            Grado en Ingeniería General, Tecnológica, Mecánica o Industrial.
            Postgrado o Certificación en gestión de proyectos (PMP, Prince) · 5
            años de experiencia en proyectos líderes, relacionados con la
            industria, en el entorno industrial de alimentos y bebidas (o
            farmacéutico) · Experiencia en proyectos de tecnología industrial
            (automatización, mecánica, tubería) · Conocimiento de Lean
            Manufacturing (5S, TPM, Autonomous Maintenance, SMED, etc) –
            (deseable) · Conocimiento de las normas ISO 9000 / GMP (deseable) ·
            Conocimiento Microsoft Office, ERP (SAP) y AutoCAD. · Idioma inglés
            (excluyente) · Movilidad propia La compañía ofrece muy buenas
            condiciones de contratación y beneficios. Horario laboral: de Lunes
            a Viernes de 08.30 a 17.00 hs
          </JobDescription>
        </JobDescriptionDiv>
      </JobDetailContent>
    </>
  );
};

export default JobDetailPage;
