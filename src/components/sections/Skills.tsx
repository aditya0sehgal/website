import React, { useRef, useState, useEffect } from 'react'
import { useSpring, a } from '@react-spring/web'
import useMeasure from 'react-use-measure'
import { Container, Title, FrameLight, FrameDark, Content, toggle } from './styles'
import * as Icons from './icons'

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
    <Container>
      <Tree theme={theme} name="main" defaultOpen>
        <Tree theme={theme} name="hello" />
        <Tree theme={theme} name="subTree with children">
          <Tree theme={theme} name="hello" />
          <Tree theme={theme} name="sub-subtree with children">
            <Tree theme={theme} name="child 1" />
            <Tree theme={theme} name="child 2" />
            <Tree theme={theme} name="child 3" />
            <Tree theme={theme} name="custom content">
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: 200,
                  padding: 10,
                }}>
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    background: 'black',
                    borderRadius: 5,
                  }}
                />
              </div>
            </Tree>
          </Tree>
          <Tree theme={theme} name="hello" />
        </Tree>
        <Tree theme={theme} name="world" />
        <Tree theme={theme} name={<span>🙀 something something</span>} />
      </Tree>
    </Container>
    <br />
    </div>
  )
}
