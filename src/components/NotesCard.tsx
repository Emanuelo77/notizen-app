import Card from "react-bootstrap/Card";
import { Note } from '../types/notes.types'
import { Button } from "react-bootstrap";

type Props = Note & {


}
  

 function NotesCard(props: Props) {

  const categories = props.categories.map(c => '#' + c).join(' ')

  return (
    <Card className='mb-1'>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.content}
        </Card.Text>
        <Card.Subtitle className="mb-2 text-muted">{
          categories
        }</Card.Subtitle>
        <Button variant="outline-success">Bearbeiten</Button>{' '}
        <Button variant="outline-danger">löschen</Button>{' '}
      </Card.Body>
    </Card>
  )
}

export default NotesCard;