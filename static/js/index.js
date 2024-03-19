document.addEventListener('DOMContentLoaded', function() {
  const courses = [
      { title: "Introduction to Programming", description: "Learn the basics of programming." },
      { title: "Web Development Fundamentals", description: "Dive into web development." },
      { title: "Data Science & Analytics", description: "Explore the world of data." }
  ];

  const coursesContainer = document.querySelector('.courses');
  courses.forEach(course => {
      const courseElement = document.createElement('div');
      courseElement.classList.add('course-item');
      courseElement.innerHTML = `
          <h3>${course.title}</h3>
          <p>${course.description}</p>
      `;
      coursesContainer.appendChild(courseElement);
  });
});
