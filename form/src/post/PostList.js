import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import CommonTable from '../component/CommonTable';
import CommonTableColumn from '../component/CommonTableColumn';
import CommonTableRow from '../component/CommonTableRow'; 
import postList  from '../Data';//경로설정

const PostList = props => {
   const [dataList, setDataList] = useState([]);

    useEffect(() => {
        setDataList(postList);
    }, [])

    return(
        <>
            <CommonTable heardersName = {['글번호', '제목', '등록', '조회']}>
                {
                    dataList ? dataList.map((item, index) => {
                        return(
                            <CommonTableRow key = {index}>
                                <CommonTableColumn>{item.no}</CommonTableColumn>
                                <CommonTableColumn>
                                    <Link to = {'/postView/${item.no}'}>{item.title}</Link>
                                </CommonTableColumn>
                                <CommonTableColumn>{item.createDate}</CommonTableColumn>
                                <CommonTableColumn>{item.readCount}</CommonTableColumn>
                            </CommonTableRow>
                        )
                    }) : ''
                }
            </CommonTable> 
        </>
    )
}
export default PostList;

//React Hooks 함수 사용