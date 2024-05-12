const postList = [
    {
        "no":1,
        "title": "첫번째 게시글",
        "content": "첫번째 게시글 내용",
        "createDate": "2024-05-05",
        "readCount" : 6
    },
    {
        "no":2,
        "title": "두번째 게시글",
        "content": "두번째 게시글 내용",
        "createDate": "2024-05-06",
        "readCount" : 5
    },
    {
        "no":3,
        "title": "세번째 게시글",
        "content": "세번째 게시글 내용",
        "createDate": "2024-05-07",
        "readCount" : 1
    },
    {
        "no":4,
        "title": "네번째 게시글",
        "content": "네번째 게시글 내용",
        "createDate": "2024-05-08",
        "readCount" : 2
    },
    {
        "no":5,
        "title": "다섯번째 게시글",
        "content": "다섯번째 게시글 내용",
        "createDate": "2024-05-10",
        "readCount" : 4
    }
];

const getPostByNo = no => {
    const array = postList.filter(x => x.no == no);
    if(array.length == 1){
        return array [0];
    }
    return null;
}

export{
    postList,
    getPostByNo
};