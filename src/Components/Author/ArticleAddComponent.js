import React, { useContext, useState, useEffect } from 'react';
import { BlogContext } from '../../Store/Store';
import TagsV2 from '../TagsV2';
import { findTags } from '../../article';
import { BallBeat } from 'react-pure-loaders';
import { addTags } from '../../article'
import Editor from '../QuillComponent'
import ReactDOM from "react-dom";
import SelectCategory from '../CategoriesComponent'
const state = {
    category_id: 0,
    title: '',
    article: '',
    published: '',
    tags: [],
    cover_image: ''
}
const AddArticle = () => {
    const node = ReactDOM.findDOMNode(this);

    const [category_id, setCategoryId] = useState(state.category_id)
    const [title, setTitle] = useState(state.title)
    const [article, setArticle] = useState(state.article)
    const [published, setPublished] = useState(state.published)
    const [cover_image, setCoverImage] = useState(state.cover_image)
    const [tags, setTags] = useState(state.tags)
    const [loading, setLoading] = useState(false);
    

    const { addArticle, user, categories } = useContext(BlogContext);
   
    const listClick = (event) => {
        console.log(event.target.className)
        state.tags.push(event.target.getAttribute('dataId'))
        var span = document.createElement('span');
        var span_title = document.createElement('span');
        var participants = document.createElement('input');
        var participants_text = document.createElement('input');
        var remove_a = document.createElement('a');
        span.setAttribute('class', 'removable uiToken');


        span_title.setAttribute('class', 'uiTokenText');
        span_title.innerHTML = event.target.id;

        participants.setAttribute('type', 'hidden');
        participants.setAttribute('name', 'participants[]');
        participants.setAttribute('id', 'participants');
        participants.setAttribute('autocomplete', 'off');
        participants.value = event.target.dataId;

        participants_text.setAttribute('type', 'hidden');
        participants_text.setAttribute('name', 'text_participants[]');
        participants_text.setAttribute('autocomplete', 'off');
        participants_text.value = event.target.id;

        remove_a.setAttribute('class', 'remove uiCloseButton uiCloseButtonSmall');
        remove_a.addEventListener('click', remove);
        remove_a.setAttribute('id', 'a' + event.target.id.replace(/ /g, '_'));
        remove_a.setAttribute('style', 'text-decoration: none;');
        remove_a.innerHTML = "&times;";

        span.appendChild(span_title);
        span.appendChild(participants);
        span.appendChild(participants_text);
        span.appendChild(remove_a);
        if (event.target.className === 'addTag') {
            setLoading(true)
            addTags(user.public_key, event.target.getAttribute('dataId')).then(res => {
                console.log(res.status)
                if (res.status === 200) {
                    setLoading(false)
                    document.querySelector("#tokenarea").appendChild(span);
                    
               }
            });
        }else{

            document.querySelector("#tokenarea").appendChild(span);
        
         }
    const child = document.querySelector('.hidden_elem');
    child.setAttribute('style', 'display:none');
    document.querySelector('.inputtext').value = "";
    }
    const filterTags = (event) => {

        if (event.target.value.length > 2) {
            setLoading(true)
            findTags(user.public_key, event.target.value)
                .then(res => res.json())
                .then(response => {
                    setLoading(false)
                    if (response.response.code === 200) {

                        const child = document.querySelector('.hidden_elem');
                        child.setAttribute('style', 'display:block');

                        document.querySelector('#typeahead_list_js_e').innerHTML = "";
                        if (response.response.data.length > 0) {
                            response.response.data.map(tagList => {
                                state.tags = (response.response.data)
                                var li = document.createElement('li');

                                var span_text = document.createElement('span');


                                li.setAttribute('class', 'user');
                                li.setAttribute('title', tagList.tag);
                                li.setAttribute('id', 'js_p');

                                span_text.addEventListener('click', listClick)
                                span_text.setAttribute('id', tagList.tag);
                                span_text.setAttribute('dataId', tagList.id);
                                span_text.setAttribute('class', 'text');
                                span_text.innerHTML = tagList.tag;
                                li.appendChild(span_text);
                                document.getElementById('typeahead_list_js_e').appendChild(li);
                            });
                        } else {
                            var li = document.createElement('li');
                            var span_text = document.createElement('span');
                            var i = document.createElement('i');
                            li.setAttribute('class', 'user');
                            i.setAttribute('class', 'addTag');
                            i.setAttribute('id', response.response.queryString);
                            i.setAttribute('dataId', response.response.queryString);
                            span_text.setAttribute('class', 'text');
                            i.innerHTML = response.response.queryString;
                            i.setAttribute('style', 'color:#379392')
                            i.addEventListener('click', listClick)
                            span_text.innerHTML = "Click to create new tag ";
                            span_text.append(i);
                            li.appendChild(span_text);
                            document.getElementById('typeahead_list_js_e').appendChild(li);


                        }

                    }
                    // console.log(response)
                });
        }
    }
    const remove = (event) => {
        event.preventDefault()
        document.querySelector("#" + event.target.id).parentNode.remove()
    }

    const changeArticleData = (event) => {
        switch (event.target.id) {
            case 'category_id':
                setCategoryId(event.target.value);
                break;
            case 'title':
                setTitle(event.target.value);
                break;
            case 'article':
                setArticle(event.target.value);
                break;
            case 'cover_image':
                setCoverImage(event.target.files[0]);
                break;
            case 'published':
                setPublished(event.target.value);
                break;
            case 'tags_ids':
                console.log(event.target.value)
                let v = Array.from(event.target.selectedOptions, option => option.value);

                break;
            default:
        }
    }

    return (
        <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
                <div className="col-lg-12 mt-3">

                    <div className="articles card">
                        <form onSubmit={addArticle} encType="multipart/form-data" method="post" acceptCharset="utf-8" action="/skole/blog/articles/add">

                            <fieldset className="card-body">

                                <div className="form-group"><label htmlFor="category-id">Category</label>
                                    <SelectCategory categories={categories}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="title">Title</label>
                                    <input onChange={changeArticleData} type="text" name="title" className="form-control" required="required" maxLength="200" id="title" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="cover-image">Cover Image</label>
                                    <input onChange={changeArticleData} type="file" name="cover_image" className="form-control" id="cover_image" />
                                </div>
                                <div className="form-group form-group-sm">
                                <Editor placeholder={'Write something...'}/>
                                    <textarea  name="article" className="article form-control" style={{display:'none'}}placeholder="enter message" id="article" maxLength="100000" rows="5"></textarea>
                                </div>
                                <div className="form-group">
                                    <input type="hidden" name="published" value="0" className="form-control" />
                                    <label htmlFor="published">
                                        <input onChange={changeArticleData} type="checkbox" name="published" value="1" id="published" />Published
                        </label>
                                </div>

                                {/* <div className="form-group"> */}
                                <div className="form-group">
                                    <b>TAGS</b>
                                    <input type="text" placeholder="enter tags to begin search" className="form-control textInput inputtext" id="inputtext" style={{ width: '100%', border: 'none', outline: 'none', borderBottom: '1px solid #000' }} onChange={filterTags} autoComplete="off" />
                                    {loading ? <BallBeat color="#379392" loading /> : ''}
                                </div>
                                <div className="uiContextualLayerPositioner uiLayer hidden_elem" data-ownerid="js_e" style={{ 'width': '454px', 'left': '26px' }}>

                                    <div className="uiContextualLayer uiContextualLayerBelowLeft">

                                        <div style={{ 'width': '34px' }}>
                                            <div className="uiTypeaheadView uiContextualTypeaheadView uiInlineTokenizerView hidden_elem">
                                                <ul className="compact" id="typeahead_list_js_e" role="listbox">


                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {<TagsV2 tags={[]} view={false} filter={filterTags} />}

                                {/* </div> */}<br />
                                <br />
                                <button className="btn btn-block btn-primary" type="submit">Submit</button>
                            </fieldset>

                        </form></div>
                </div>
            </div>
        </div>
    );
}
export default AddArticle;
