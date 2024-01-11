'use client';

import './CategoryManage.scss';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button, Col, Container, Row, Form } from 'react-bootstrap';
import { FiEdit } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';

import { useData } from '@/app/components/context/context';
import categoryInterface from '@/assets/interfaces/category';
import CategoryService from '@/services/CategoryService';
import Film_Category from '@/services/Film_Category';

function ManageCategories() {
    const [categories, setCategories] = useState<any>(null);
    const [showForm, setShowForm] = useState(false);
    const [category_inp, setCategory_inp] = useState('');
    const iconSize = 35;
    const { setData } = useData();

    useEffect(() => {
        async function getCategories() {
            const res = await CategoryService.getObjects();
            setCategories(res);
        }

        document.title = 'Category Management';
        getCategories();
    }, []);

    async function handleClickEdit(cate: any) {
        const newCate = prompt('Nhập vào thể loại mới: ', cate.tenTheLoai);
        if (newCate != null) {
            await CategoryService.updateObject(
                {
                    id: cate.id,
                    tenTheLoai: newCate,
                },
                cate.id
            );
            const tempList = [...categories];
            for (const c of tempList) {
                if (c.id === cate.id) {
                    c.tenTheLoai = newCate;
                    break;
                }
            }
            setCategories(tempList);
        }
    }

    async function handleDeleteCategory(cate_id: any, cate_name: any) {
        const result = window.confirm(`Do you want to delete ${cate_name}`);

        if (result) {
            await Film_Category.deleteObjectsByIdTheLoai(cate_id);
            await CategoryService.deleteObject(cate_id);

            alert(`Deleted success Category ${cate_name}`);
            setCategories((prev: any) =>
                prev.filter((item: any) => item.id !== cate_id)
            );
        }
    }

    function hanldeClickAdd(e: any) {
        setShowForm(!showForm);
    }

    async function handleAddCategory(e: any) {
        e.preventDefault();
        const newCate = await CategoryService.createObject({
            id: '0',
            tenTheLoai: category_inp,
        });
        setCategories((prev: any) => [...prev, newCate.data]);
    }

    if (categories == null)
        return (
            <Container>
                <p className="text-dark">{`You need admin permission :<`}</p>
            </Container>
        );

    return (
        <Container className="manageContainer">
            <Row>
                <Col xl={4}>
                    <h1 className="text-white py-2">List Categories</h1>
                </Col>
                <Col xl={3} className="d-flex align-items-center">
                    <Button
                        variant={showForm ? 'danger' : 'primary'}
                        onClick={hanldeClickAdd}
                    >
                        {showForm ? 'Cancel' : 'Add new Category'}
                    </Button>
                </Col>
                {showForm && (
                    <Col className="d-flex">
                        <Form
                            className="form-container d-flex align-items-center justify-content-around"
                            onSubmit={handleAddCategory}
                        >
                            <Form.Group controlId="formAddCategoryName">
                                <Form.Control
                                    className="rounded-pill ps-3"
                                    type="text"
                                    placeholder="Enter new category"
                                    required
                                    onChange={(e) =>
                                        setCategory_inp(e.target.value)
                                    }
                                />
                            </Form.Group>
                            <Button type="submit" className="mx-3 btn-submit">
                                Save
                            </Button>
                        </Form>
                    </Col>
                )}
            </Row>
            <Row className="px-3">
                <table className="table table-hover table-bordered">
                    <thead className="table-header">
                        <tr className="">
                            <th>#</th>
                            <th>Name</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map(
                            (cate: categoryInterface, idx: number) => {
                                return (
                                    <tr key={cate.id}>
                                        <td className="align-middle text-center">
                                            {idx + 1}
                                        </td>
                                        <td className="w-25 align-middle">
                                            {cate.tenTheLoai}
                                        </td>
                                        <td className="align-middle text-center">
                                            <Link
                                                href={``}
                                                onClick={() =>
                                                    handleClickEdit(cate)
                                                }
                                            >
                                                <FiEdit
                                                    className="text-warning"
                                                    size={iconSize}
                                                />
                                            </Link>
                                        </td>
                                        <td className="align-middle text-center">
                                            <Link
                                                href={``}
                                                onClick={() => {
                                                    handleDeleteCategory(
                                                        cate.id,
                                                        cate.tenTheLoai
                                                    );
                                                }}
                                            >
                                                <MdDelete
                                                    className="text-danger"
                                                    size={iconSize}
                                                />
                                            </Link>
                                        </td>
                                    </tr>
                                );
                            }
                        )}
                    </tbody>
                </table>
            </Row>
        </Container>
    );
}

export default ManageCategories;
