// import React from 'react';

// import Link from 'next/link';
// import { useEffect, useState } from 'react';
// import { Button, Col, Container, Row, Form } from 'react-bootstrap';
// import { FiEdit } from 'react-icons/fi';
// import { MdDelete } from 'react-icons/md';

// import { useData } from '@/app/components/context/context';
// import DirectorService from '@/services/DirectorService';
// import director from '@/assets/interfaces/director';

// function ManageDirector() {
//     const [directors, setDirectors] = useState<any>(null);
//     const [showForm, setShowForm] = useState(false);
//     const [category_inp, setCategory_inp] = useState('');
//     const iconSize = 35;
//     const { setData } = useData();

//     useEffect(() => {
//         async function getDirectors() {
//             const res = await DirectorService.getObjects();
//             setDirectors(res);
//         }

//         document.title = 'Category Management';
//         getDirectors();
//     }, []);

//     async function handleClickEdit(cate: any) {
//         const newCate = prompt('Nhập vào thể loại mới: ', cate.tenTheLoai);
//         if (newCate != null) {
//             await DirectorService.updateObject(
//                 {
//                     id: cate.id,
//                     tenTheLoai: newCate,
//                 },
//                 cate.id
//             );
//             const tempList = [...directors];
//             for (const c of tempList) {
//                 if (c.id === cate.id) {
//                     c.tenTheLoai = newCate;
//                     break;
//                 }
//             }
//             setDirectors(tempList);
//         }
//     }

//     async function handleDeleteCategory(cate_id: any, cate_name: any) {
//         const result = window.confirm(`Do you want to delete ${cate_name}`);

//         if (result) {
//             alert(`Deleted success Category ${cate_name}`);
//             setDirectors((prev: any) =>
//                 prev.filter((item: any) => item.id !== cate_id)
//             );
//         }
//     }

//     function hanldeClickAdd(e: any) {
//         setShowForm(!showForm);
//     }

//     async function handleAddCategory(e: any) {
//         e.preventDefault();
//         const newCate = await DirectorService.createObject({
//             id: '0',
//             tenTheLoai: category_inp,
//         });
//         setDirectors((prev: any) => [...prev, newCate.data]);
//     }

//     if (directors == null)
//         return (
//             <Container>
//                 <p className="text-dark">{`You need admin permission :<`}</p>
//             </Container>
//         );

//     return (
//         <Container className="manageContainer">
//             <Row>
//                 <Col xl={4}>
//                     <h1 className="text-white py-2">List Categories</h1>
//                 </Col>
//                 <Col xl={3} className="d-flex align-items-center">
//                     <Button
//                         variant={showForm ? 'danger' : 'primary'}
//                         onClick={hanldeClickAdd}
//                     >
//                         {showForm ? 'Cancel' : 'Add new Category'}
//                     </Button>
//                 </Col>
//                 {showForm && (
//                     <Col className="d-flex">
//                         <Form
//                             className="form-container d-flex align-items-center justify-content-around"
//                             onSubmit={handleAddCategory}
//                         >
//                             <Form.Group controlId="formAddCategoryName">
//                                 <Form.Control
//                                     className="rounded-pill ps-3"
//                                     type="text"
//                                     placeholder="Enter new category"
//                                     required
//                                     onChange={(e) =>
//                                         setCategory_inp(e.target.value)
//                                     }
//                                 />
//                             </Form.Group>
//                             <Button type="submit" className="mx-3 btn-submit">
//                                 Save
//                             </Button>
//                         </Form>
//                     </Col>
//                 )}
//             </Row>
//             <Row className="px-3">
//                 <table className="table table-hover table-bordered">
//                     <thead className="table-header">
//                         <tr className="">
//                             <th>#</th>
//                             <th>Name</th>
//                             <th>Edit</th>
//                             <th>Delete</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {directors.map((cate: director, idx: number) => {
//                             return (
//                                 <tr key={cate.id}>
//                                     <td className="align-middle text-center">
//                                         {idx + 1}
//                                     </td>
//                                     <td className="w-25 align-middle">
//                                         {cate.tenTheLoai}
//                                     </td>
//                                     <td className="align-middle text-center">
//                                         <Link
//                                             href={``}
//                                             onClick={() =>
//                                                 handleClickEdit(cate)
//                                             }
//                                         >
//                                             <FiEdit
//                                                 className="text-warning"
//                                                 size={iconSize}
//                                             />
//                                         </Link>
//                                     </td>
//                                     <td className="align-middle text-center">
//                                         <Link
//                                             href={``}
//                                             onClick={() => {
//                                                 handleDeleteCategory(
//                                                     cate.id,
//                                                     cate.tenTheLoai
//                                                 );
//                                             }}
//                                         >
//                                             <MdDelete
//                                                 className="text-danger"
//                                                 size={iconSize}
//                                             />
//                                         </Link>
//                                     </td>
//                                 </tr>
//                             );
//                         })}
//                     </tbody>
//                 </table>
//             </Row>
//         </Container>
//     );
// }

// export default ManageDirector;
