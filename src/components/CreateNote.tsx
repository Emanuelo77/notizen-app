import React, { useRef } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { Note } from '../types/notes.types';

interface Props {
    notes: Note[];
    addNote: (note: Note) => void;
}

function CreateNote(props: Props) {
    const titleRef = useRef<HTMLInputElement>(null);
    const contentRef = useRef<HTMLTextAreaElement>(null);
    const categoriesRef = useRef<HTMLInputElement>(null);
    const userRef = useRef<HTMLInputElement>(null);
    const dateRef = useRef<HTMLInputElement | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const title = titleRef.current!.value;
        const content = contentRef.current!.value;
        const categoriesInput = categoriesRef.current!.value;
        const user = userRef.current!.value;

        if (!title || !content || !categoriesInput || !user) return;

        const id = props.notes.length + 1;
        const categories = categoriesInput.split(',').map(category => category.trim());
        const date = dateRef.current ? new Date(dateRef.current.value) : new Date();

        props.addNote({
            title,
            content,
            categories,
            user,
            date,
            id
        });
    };

    return (
        <Card className='mb-1'>
            <Card.Body>
                <Card.Title>Notiz erstellen</Card.Title>
                <Form onSubmit={(e) => handleSubmit(e)}>
                    <Form.Group className="mb-3">
                        <Form.Label>Titel</Form.Label>
                        <Form.Control type="text" placeholder="Gebe den Titel ein" ref={titleRef} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Inhalte</Form.Label>
                        <Form.Control as="textarea" placeholder="Gebe die Notiz ein" rows={5} ref={contentRef} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Kategorien</Form.Label>
                        <Form.Control type="text" placeholder="Gebe die Kategorien ein" ref={categoriesRef} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Nutzer</Form.Label>
                        <Form.Control type="text" placeholder="Gebe den Nutzer ein" ref={userRef} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Datum</Form.Label>
                        <Form.Control type="date" ref={dateRef} />
                    </Form.Group>
                    <Button type="submit" variant="outline-primary">Notiz erstellen</Button>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default CreateNote;
