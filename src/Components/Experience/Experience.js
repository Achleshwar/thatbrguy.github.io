import React, { Component } from 'react';
import './Experience.css'

class ExperienceCard extends Component{
  render(){
    return(

      <div className="timeline-element right">
        <div className="timeline-content">
          <h2>{this.props.data.role}</h2>
          <h4>{this.props.data.title}</h4>
          <h6>{this.props.data.duration}</h6>
          <p>{this.props.data.desc}</p>
        </div>
      </div>

    )
  }
}

class SkillsIcon extends Component {
  render() {
    return(
      <div>
        <div className="icon-bg-style">
          <i className={this.props.skills.iconClass}></i>
        </div>
        <div className="skills-text">
          <p><b>{this.props.skills.skillText}</b></p>
        </div>
        <div style={{paddingLeft: '62px', marginTop: '-20px'}}>
          <p>{this.props.skills.desc}</p>
        </div>
      </div>
    )
  }
}

class Experience extends Component{

  loopThroughJson(){
    let exp = this.props.expData;
    let experienceCards = [];
    for(let i = exp.length - 1; i >= 0; i--)
    {
      let data = exp[i];
      experienceCards.push(<ExperienceCard data={data}/>)
    }

    return(
      <div>
        {experienceCards}
      </div>
    )
  }

  render(){
    return(
      <div className="timeline">
        {this.loopThroughJson()}
      </div>
    )
  }
}

class Skills extends Component {

  acheivements(){
    let htmlList = []
    let acheivementList = this.props.achievementsData;

    for(let i = acheivementList.length - 1; i >= 0; i--)
    {
      let data = acheivementList[i];
      htmlList.push(
        <li>
          <h4><b>{data.title}</b> | <i>{data.place}</i></h4>
          <h6 style={{marginTop: '-5px'}}>{data.date}</h6>
          <p>{data.desc}</p>
        </li>
      );
    }

    return(
      <div>
        <ul style={{paddingLeft: '5px'}}>
          {htmlList}
        </ul>
      </div>
    )
  }

  render() {
    const skillList = {
    'code':{
            'iconClass': "fas fa-code icon-style-code",
            'skillText': "Code",
            'desc': 'Python, C, C++, JavaScript, MATLAB, Bash'
          },
    'dev':{
            'iconClass': "fab fa-react icon-style-dev",
            'skillText': "Development",
            'desc': 'React, Django, AWS, GCP, Git, GIMP'
          },
    'fw':{
            'iconClass': "fas fa-fire icon-style-fw",
            'skillText': "Frameworks",
            'desc': 'TensorFlow, PyTorch, Keras, Scikit'
          }
    }
    return(
      <div style={{color:"black"}}>
          <h2>Acheivements</h2>
          {this.acheivements()}
          <h2>Skills</h2>
          <div>
            <SkillsIcon skills={skillList['code']} />
            <SkillsIcon skills={skillList['dev']} />
            <SkillsIcon skills={skillList['fw']} />
          </div>  
      </div>
    )
  }
}

class ExpSkillsGird extends Component {
  render() {
    console.log(this.props.achievementsData)
    return(

      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <Experience expData={this.props.expData} />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <Skills achievementsData={this.props.achievementsData} />
          </div>
        </div>
      </div>

    )
  }
}

export default ExpSkillsGird;