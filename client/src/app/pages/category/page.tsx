'use client';

import './category.scss';

import { useEffect, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';

import CategoryService from '@/services/CategoryService';

function Category() {
    const [categories, setCategories] = useState([]);
    const [checkboxValues, setCheckboxValues] = useState<Array<any>>([]);

    useEffect(() => {
        async function getCategories() {
            const res = await CategoryService.getObjects();
            setCategories(res);
        }

        document.title = 'Category';
        getCategories();
    }, []);

    function handleSubmit(event: any) {
        event.preventDefault();
        alert(checkboxValues.join(', '));
    }

    function hanleCheckboxChange(category: string) {
        setCheckboxValues((prev: any) => {
            return prev.includes(category)
                ? prev.filter((item: any) => item !== category)
                : [...prev, category];
        });
    }

    return (
        <Form className="categoryContainer m-3" onSubmit={handleSubmit}>
            <Container>
                <Row>
                    {categories.length != 0 &&
                        categories.map((item: any) => {
                            return (
                                <Col key={item.id}>
                                    <Form.Check
                                        type="checkbox"
                                        label={item.tenTheLoai}
                                        id={item.id}
                                        checked={checkboxValues.includes(
                                            item.id
                                        )}
                                        onChange={() =>
                                            hanleCheckboxChange(item.id)
                                        }
                                    />
                                </Col>
                            );
                        })}
                </Row>
                <Row className="mt-3">
                    <Col>
                        <button
                            type="submit"
                            className="btn btn-primary submitBtn"
                        >
                            Search
                        </button>
                    </Col>
                </Row>
            </Container>
        </Form>
    );
}

export default Category;
