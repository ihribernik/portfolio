import data from "../data/jobs";

function getFirstJob() {
  return data[0];
}

const About = () => {
  const current_job = getFirstJob();

  return (
    <section>
      <div className="flex flex-col pt-4">
        <h1 className="text-3xl font-bold pb-4 underline">Sobre mi: </h1>
        <p className="text-sm font-normal">
          Naci en el año 1989 en la ciudad de Buenos Aires, Argentina.
        </p>
        <p className="text-sm font-normal">
          Soy Analista de Sistemas y me dedico al desarrollo de software desde
          el año 2015. Actualmente trabajo en la empresa {current_job.employer}{" "}
          como {current_job.position}.
        </p>
        <p className="text-sm font-normal">
          Me gusta mucho el desarrollo de software, aprender cosas nuevas e
          investigar sobre nuevas tecnologías.
        </p>
        <p className="text-sm font-normal">
          Por otro lado soy un apasionado de la música, toco la guitarra y el
          bajo.
        </p>
      </div>
    </section>
  );
};

export default About;
