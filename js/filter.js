function filterCourses(category) {
    const courses = document.querySelectorAll('.course-card');
  
    courses.forEach(course => {
      if (category === 'all') {
        course.style.display = 'block';
      } else {
        course.style.display = course.classList.contains(category) ? 'block' : 'none';
      }
    });
  }


