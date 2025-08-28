import coursesData from "@/shared/data/courses.json";

export default function Page({ course }) {
  return (
    <div className="courses__item item-courses">
      <div className="item-courses__img">
        <img src={course.icon} alt="course-icon" />
      </div>
      <span>курс</span>
      <h2>{course.name}</h2>
      <span>{course.duration}</span>
      <p>{course.desc}</p>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = coursesData.map((item) => ({
    params: {
      slug: item.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params, locale }) {
  const { slug } = params;

  const course = coursesData.find((item) => item.slug === slug);

  if (!course) {
    return {
      notFound: true,
    };
  }

  return {
    props: { course },
  };
}
