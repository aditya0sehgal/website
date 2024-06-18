import { useForm } from "react-hook-form";
import { Row, Col, Form, Button, FloatingLabel } from "react-bootstrap";

const ContactMe = ({ theme }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { name, email, subject, message } = data;
    console.log(import.meta.env.VITE_TEST);

    console.log("Name: ", name);
    console.log("Email: ", email);
    console.log("Subject: ", subject);
    console.log("Message: ", message);
  };

  const currentTheme =
    `content ` +
    (theme === "light" ? "text-dark " : "text-light ") +
    `bg-${theme}`;

  return (
    <div
      className={currentTheme}
      style={{
        width: "80vw",
        height: "auto",
        boxShadow: "2.5px 2.5px 3px 3px lightblue",
        padding: "1%",
      }}
    >
      <Row>
        <Col className="text-center">
          <Form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
            {/* Row 1 of form */}
            <Row className="formRow mt-3 mb-3">
              <Col md={6}>
                <Form.Group controlId="formName">
                  <FloatingLabel controlId="floatingName" label="Name">
                    <Form.Control
                      type="text"
                      className={currentTheme}
                      name="name"
                      placeholder="Name"
                      {...register("name", {
                        required: "Please enter your name",
                        maxLength: {
                          value: 30,
                          message: "Please use 30 characters or less",
                        },
                      })}
                      isInvalid={!!errors.name}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.name && errors.name.message}
                    </Form.Control.Feedback>
                  </FloatingLabel>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formEmail">
                  <FloatingLabel
                    controlId="floatingEmail"
                    label="Email address"
                  >
                    <Form.Control
                      type="email"
                      className={currentTheme}
                      name="email"
                      placeholder="Email address"
                      {...register("email", {
                        required: "Please enter a valid email address",
                        pattern: {
                          value:
                            /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                          message: "Please enter a valid email address",
                        },
                      })}
                      isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email && errors.email.message}
                    </Form.Control.Feedback>
                  </FloatingLabel>
                </Form.Group>
              </Col>
            </Row>
            {/* Row 2 of form */}
            <Row className="formRow mb-3">
              <Col>
                <Form.Group controlId="formSubject">
                  <FloatingLabel controlId="floatingSubject" label="Subject">
                    <Form.Control
                      type="text"
                      name="subject"
                      className={currentTheme}
                      placeholder="Subject"
                      {...register("subject", {
                        required: "Please enter a subject",
                        maxLength: {
                          value: 75,
                          message: "Subject cannot exceed 75 characters",
                        },
                      })}
                      isInvalid={!!errors.subject}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.subject && errors.subject.message}
                    </Form.Control.Feedback>
                  </FloatingLabel>
                </Form.Group>
              </Col>
            </Row>
            {/* Row 3 of form */}
            <Row className="formRow mb-3">
              <Col>
                <Form.Group controlId="formMessage">
                  <FloatingLabel controlId="floatingMessage" label="Message">
                    <Form.Control
                      as="textarea"
                      rows={3}
                      className={currentTheme}
                      name="message"
                      placeholder="Message"
                      {...register("message", {
                        required: "Please enter a message",
                      })}
                      isInvalid={!!errors.message}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.message && errors.message.message}
                    </Form.Control.Feedback>
                  </FloatingLabel>
                </Form.Group>
              </Col>
            </Row>
            <Button className="submit-btn m-3" type="submit">
              Send email !!
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default ContactMe;
