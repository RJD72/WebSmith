import { Card } from "../components/Card";

export const Projects = () => {
  return (
    <section className="pt-24 dark:bg-gray-900 dark:text-white">
      <h2 className="text-3xl text-center mb-7">Projects</h2>
      <div
        id="projects"
        className="mx-5 md:mx-20 lg:mx-40 xl:mx-auto xl:max-w-6xl pt-18 grid grid-cols-1 place-items-center md:grid-cols-2 xl:grid-cols-3 gap-8"
      >
        <Card
          url={"https://taskmatewebapp.netlify.app/"}
          image={"/assets/taskmate.png"}
          title={"TaskMate"}
          body={
            "This project offers a customizable to-do list allowing you to effortlessly edit or remove specific tasks, or clear the entire list. Additionally, it provides the option to personalize the background for a unique visual experience."
          }
        />
        <Card
          url={"https://cinemateproject.netlify.app/"}
          image={"/assets/cinemate.png"}
          title={"CineMate"}
          body={
            "This project seamlessly links to IMDb, gathering details on currently playing, popular, top-rated, and upcoming movies. Each clickable card provides comprehensive information about the selected movie for a deeper dive into its specifics"
          }
        />
        <Card
          url={"https://groupprojectdashboard.netlify.app/"}
          image={"/assets/starwing-dashboard.png"}
          title={"Star Wing Dashboard"}
          body={
            "This project was a collaborative effort in a data visualization class, employing HTML, CSS, JavaScript, and Bootstrap to create interactive graphs using d3.js. Additionally, it integrates with a pre-established pattern library, a prerequisite for the project's development."
          }
        />
      </div>
    </section>
  );
};
