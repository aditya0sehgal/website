import PropTypes from "prop-types"
import { Card, ListGroup } from "react-bootstrap"

function DescriptionCard({
  title,
  subtitle,
  date,
  description,
  theme,
  techStack,
  location,
  link,
}) {
  return (
    <Card
      className={
        `content mb-4 ` +
        (theme === "light" ? "text-dark " : "text-light ") +
        `bg-${theme}`
      }
      id="cardeffect"
    >
      <Card.Body>
        <Card.Title>
          <b>{title}</b>{" "}
          {subtitle && (
            <i>
              {" "}
              @<span className="text-primary"> {subtitle}</span>
            </i>
          )}
        </Card.Title>
        <Card.Text className="mb-2">{date}</Card.Text>
        {location && (
          <Card.Text className="mb-2">
            <strong>Location:</strong> {location}
          </Card.Text>
        )}
        <ListGroup variant="flush">
          {description.map((item, index) => (
            <ListGroup.Item
              className={
                `` +
                (theme === "light" ? "text-dark " : "text-light ") +
                `bg-${theme}`
              }
              key={index}
            >
              <span style={{ color: "#ff4081", marginRight: "10px" }}>❯</span>
              {item}
            </ListGroup.Item>
          ))}
        </ListGroup>
        {techStack && techStack.length > 0 && (
          <Card.Text className="mt-3">
            <strong>Tech Stack:</strong> {techStack.join(", ")}
          </Card.Text>
        )}
        {link && (
          <Card.Text className="mt-3">
            <strong>Link:</strong>{" "}
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link}
            </a>
          </Card.Text>
        )}
      </Card.Body>
    </Card>
  )
}

DescriptionCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  date: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
  theme: PropTypes.string.isRequired,
  techStack: PropTypes.arrayOf(PropTypes.string),
  location: PropTypes.string,
  link: PropTypes.string,
}

export default DescriptionCard
