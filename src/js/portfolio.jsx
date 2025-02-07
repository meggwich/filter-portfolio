// import Toolbar from './toolbar';
// import ProjectList from './projectlist';
// import projectsResource from '../res/resource';
// import { useState } from 'react';

// const Portfolio = () => {
    
//     const [filters] = useState(["All", "Websites", "Flayers", "Business Cards"]);
//     const [selectedFilter, setSelectedFilter] = useState(Toolbar.selected);
//     const [projects] = useState(projectsResource);

//     const handleSelectFilter = filter => {
//         setSelectedFilter(filter)
//     };

//     const getFilteredProjects = () => {
//         if (selectedFilter === 'All') {
//             return projects;
//         } 

//         return projects.filter(project => project.category === selectedFilter);
//     };

//     const filteredProjects = getFilteredProjects();

//     return (
//         <div>
//             <Toolbar
//             filters={ filters }
//             selected={ selectedFilter }
//             onSelectFilter={handleSelectFilter}/>
//             <ProjectList projects={ filteredProjects }/>
//         </div>
        
//     );
// }

// export default Portfolio;



import { Component } from 'react';
import Toolbar from './toolbar';
import ProjectList from './ProjectList';
import projectsResource from '../res/resource';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: ['All', 'Websites', 'Flayers', 'Business Cards'], // Список фильтров
      selectedFilter: 'All', // Активный фильтр
      projects: projectsResource,
    };
  }

  // Обработчик выбора фильтра
  handleSelectFilter = (filter) => {
    this.setState({ selectedFilter: filter });
  };

  // Фильтрация проектов по активному фильтру
  getFilteredProjects() {
    const { selectedFilter, projects } = this.state;
    if (selectedFilter === 'All') {
      return projects; // Показываем все проекты, если выбран "All"
    }
    return projects.filter((project) => project.category === selectedFilter);
  }

  render() {
    const { filters, selectedFilter } = this.state;
    const filteredProjects = this.getFilteredProjects();

    return (
      <div>
        {/* Передаём фильтры и обработчик в Toolbar */}
        <Toolbar
          filters={filters}
          selected={selectedFilter}
          onSelectFilter={this.handleSelectFilter}
        />
        {/* Передаём отфильтрованные проекты в ProjectList */}
        <ProjectList projects={filteredProjects} />
      </div>
    );
  }
}

export default Portfolio;