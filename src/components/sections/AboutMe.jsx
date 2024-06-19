import Card from "react-bootstrap/Card"
import Photo from "../../assets/profile.jpg"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Stack from "react-bootstrap/Stack"

function AboutMe({ theme }) {
  return (
    <Card
      className={
        `content ` +
        (theme === "light" ? "text-dark " : "text-light ") +
        `bg-${theme}`
      }
      id="cardeffect"
    >
      <Container className="mt-3 mb-3">
        <Row className="mb-3">
          <Col md={3}>
            <Card.Img
              style={{
                borderRadius: "200px",
                margin: "auto",
                maxWidth: "200px",
                minWidth: "200px",
                width: "70%",
                objectFit: "cover",
              }}
              src={Photo}
              height="200px"
              min-height="200px"
              max-height="200px"
            />
          </Col>
          <Col
            lg={9}
            className="mt-2"
          >
            <Stack gap={2}>
              <div className="p-2">
                <Card.Title>
                  <h1>Aditya Sehgal</h1>
                </Card.Title>
              </div>
              <div className="p-2">
                <Card.Text>
                  Master of Science - Computer Science @ Rutgers University, New
                  Brunswick
                </Card.Text>
              </div>
            </Stack>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="p-2">
              <Card.Text>
                I am an enthusiastic and diligent Computer Engineer, who is
                ready to take up new challenges. I am passionate about new
                technologies as well as getting insights from data and the way
                it affects users. I love teaching coding and maths to high
                school students. Watching and playing football are few of my
                other interests. I am a fast learner who is open to learning new
                technologies. I am a speedcuber - I love solving the rubiks cube
                and have an average solving time of 30 sec. I believe having a
                deep understanding of a few skills is of paramount importance
                rather than having multiple skills without proper understanding.
                B.Tech Computer Engineering from K.J. Somaiya College of
                Engineering, Mumbai.
              </Card.Text>
            </div>
          </Col>
        </Row>
      </Container>
    </Card>
  )
}

export default AboutMe
