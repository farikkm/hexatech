import Link from "next/link";
import coursesData from "@/shared/data/courses.json";

export default function Page() {
  return (
    <>
      <h1>Courses Page</h1>
      <div className="courses__items">
        {coursesData.map((course, index) => (
          <div key={index} className="courses__item item-courses">
            <div className="item-courses__img">
              <img src={course.icon} alt="course-icon" />
            </div>
            <span>курс</span>
            <h2>{course.name}</h2>
            <span>{course.duration}</span>
            <p>{course.desc}</p>
            <Link href={`/courses/${course.slug}`}>Подробнее</Link>
          </div>
        ))}
      </div>
    </>
  );
}
