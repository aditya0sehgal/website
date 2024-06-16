import React, { useRef, useState, useEffect } from 'react'
import { useSpring, a } from '@react-spring/web'
import useMeasure from 'react-use-measure'
import { Container, Title, FrameLight, FrameDark, Content, toggle } from './styles'
import * as Icons from './icons'
import SkillInfo from '../SkillInfo'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function usePrevious<T>(value: T) {
  const ref = useRef<T>()
  useEffect(() => void (ref.current = value), [value])
  return ref.current
}

const Tree = React.memo<
  React.HTMLAttributes<HTMLDivElement> & {
    defaultOpen?: boolean
    name: string | JSX.Element
  }
>(({ children, theme ,name, style, defaultOpen = false }) => {
  const [isOpen, setOpen] = useState(defaultOpen)
  const previous = usePrevious(isOpen)
  const [ref, { height: viewHeight }] = useMeasure()
  const { height, opacity, y } = useSpring({
    from: { height: 0, opacity: 0, y: 0 },
    to: {
      height: isOpen ? viewHeight : 0,
      opacity: isOpen ? 1 : 0,
      y: isOpen ? 0 : 20,
    },
  })
  // @ts-ignore
  const Icon = Icons[`${children ? (isOpen ? 'Minus' : 'Plus') : 'Close'}SquareO`] 
  return (
    theme === "light" ?
    <FrameLight>
      <Icon style={{ ...toggle, opacity: children ? 1 : 0.3 }} onClick={() => setOpen(!isOpen)} />
      <Title style={style}>{name}</Title>
      <Content
        style={{
          opacity,
          height: isOpen && previous === isOpen ? 'auto' : height,
        }}
        >
        <a.div ref={ref} style={{ y }} children={children} />
      </Content>
    </FrameLight> :
    <FrameDark>
      <Icon style={{ ...toggle, opacity: children ? 1 : 0.3 }} onClick={() => setOpen(!isOpen)} />
      <Title style={style}>{name}</Title>
      <Content
        style={{
          opacity,
          height: isOpen && previous === isOpen ? 'auto' : height,
        }}>
        <a.div ref={ref} style={{ y }} children={children} />
      </Content>
    </FrameDark>
  )
})

export default function Skills({theme}) {
  return (
    <div className={(theme === "light" ? "text-dark " : "text-light ") +
      `bg-${theme}`   
    }
      style={theme === "dark" ? {color:"whitesmoke"} : {}}
    >
    <SkillInfo />
    <Container>
    <Row>
    <Col md={5}>
      <Tree theme={theme} name="Skills" defaultOpen>
        <Tree theme={theme} name="Programming Languages">
          <Tree theme={theme} name="Javascript" />
          <Tree theme={theme} name="Python" />
          <Tree theme={theme} name="HTML5" />
          <Tree theme={theme} name="CSS3" />
          <Tree theme={theme} name="R" />
          <Tree theme={theme} name="Java" />
        </Tree>
        <Tree theme={theme} name="Frameworks & Libraries">
            <Tree theme={theme} name="React" />
            <Tree theme={theme} name="Redux" />
            <Tree theme={theme} name="Tailwind CSS" />
            <Tree theme={theme} name="React Bootstrap" />
            <Tree theme={theme} name="Flask" />
            <Tree theme={theme} name="Node.js" />
            <Tree theme={theme} name="Angular.js" />
            <Tree theme={theme} name="Numpy" />
            <Tree theme={theme} name="Pandas" />
            <Tree theme={theme} name="Spring Boot" />
        </Tree>
        <Tree theme={theme} name="Databases and tools" >
            <Tree theme={theme} name="MySQL" />
            <Tree theme={theme} name="MongoDB" />
            <Tree theme={theme} name="PostgreSQL" />
            <Tree theme={theme} name="Matplotlib" />  
        </Tree>
        <Tree theme={theme} name={<span>🙀 Additional Skills</span>}>
            <Tree theme={theme} name="Git" />
            <Tree theme={theme} name="Github" />
            <Tree theme={theme} name="RESTful APIs" />  
            <Tree theme={theme} name="CI/CD (Github actions)" />  
            <Tree theme={theme} name="Postman" />  
            <Tree theme={theme} name="Web Hosting" />  
            <Tree theme={theme} name="ChatGPT API" />
            <Tree theme={theme} name="ChatGPT" />  
            <Tree theme={theme} name="Web Scraping" />  
            <Tree theme={theme} name="Azure Cognitive Search" />  
        </Tree>
      </Tree>
       </Col>
       <Col md={7}>
      <Tree theme={theme} name="Certifications" defaultOpen>
        <Tree theme={theme} name="Meta Front-End Developer Professional">
          <Tree theme={theme} name="Introduction to Front-End Development" />
          <Tree theme={theme} name="React Basics" />
          <Tree theme={theme} name="Advanced React" />
          <Tree theme={theme} name="Principles of UX/UI Design" />
        </Tree>
        <Tree theme={theme} name="Meta Back-End Developer Professional">
          <Tree theme={theme} name="Introduction to Back-End Development" />
          <Tree theme={theme} name="Programming in Python" />
        </Tree>
        <Tree theme={theme} name="Front-End Web Development with React" />
        <Tree theme={theme} name="SQL for Data Science (Coursera)" />
        <Tree theme={theme} name="Links">
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: 50,
                }}>
                <a href='https://drive.google.com/drive/folders/12tjUZDLfyjwFy8ZaHtxWanCiHh4JPrId?usp=drive_link' target='blank'>Certification Links</a>
              </div>
            </Tree>
      </Tree>
      </Col>
      </Row>
    </Container>
    <br />
    </div>
  )
}
