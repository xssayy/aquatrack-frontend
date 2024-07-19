import {
  Container,
  ProgressBar as BootstrapProgressBar,
  Row,
  Col,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import css from './progressBar.module.css';

const ProgressBar = ({ value }) => {
  return (
    <Container className={css.progressContainer}>
      <Row>
        <Col>
          <BootstrapProgressBar
            now={value}
            variant="success"
            label={`${value}%`}
            className={css.progressBarLine}
          />
          {/* <div
            className={css.progressCircle}
            style={{ left: `calc(${value}% - 10px)` }}
          /> */}
        </Col>
      </Row>
      <Row className={css.progressLabels}>
        <Col>0%</Col>
        <Col className="text-center">50%</Col>
        <Col className="text-end">100%</Col>
      </Row>
    </Container>
  );
};

export default ProgressBar;
