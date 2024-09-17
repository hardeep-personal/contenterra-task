import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Products = () => {

    const [data, setData] = useState();

    const getProducts = () => {
        axios.get('https://www.reddit.com/r/reactjs.json').then((res) => {

            console.log(">>", res?.data?.data?.children);
            console.log("ds>>", res?.data?.data?.children[0]?.SelfText_HTML);

            setData(res?.data?.data?.children)
        }).then((err) => {
            console.log(err);
        })
    }




    useEffect(() => {
        getProducts();
    }, [])

    return (
        <div >
            <div>
                <h3>Hardeep singh</h3>
                
                <a href="mailto:mailtohardeepsin@gmail.com">mailtohardeepsin@gmail.com</a>
                <a href="tel:+91-8360700628">+91-8360700628</a>
            </div>
            <div className="container">
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Score</th>
                            <th>Description</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((el) => (
                            <tr key={el?.data?.id}>
                                <td className='title'>{el?.data?.title}</td>
                                <td className='score'>{el?.data?.score}</td>
                                <td className='description'
                                    dangerouslySetInnerHTML={{ __html: el?.data?.SelfText_HTML || 'No description in API' }}>
                                </td>
                                <td>
                                    <img
                                        src={el?.data?.thumbnail || ''}
                                        alt="t_image"
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Products