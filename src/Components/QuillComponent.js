import React from 'react';
// Get ReactDOM
import ReactQuill from 'react-quill';
import PropTypes from 'prop-types'
 class Editor extends React.Component {
    constructor(props) {
      super(props)
      this.state = { text: this.props.defaultText } // You can also pass a Quill Delta here
      this.handleChange = this.handleChange.bind(this)
    }
   componentDidMount(){
    document.querySelector('.ql-editor').focus();
   }
    handleChange(value) {
      this.setState({ text: value })
      
      document.querySelector('.article').innerHTML = value;
    }
   
    render() {
      return (
        <ReactQuill value={this.state.text}
                    onChange={this.handleChange} 
                    modules={Editor.modules}
                    placeholder={this.props.placeholder}
                    />
      )
    }
  }

  Editor.modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{size: []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, 
       {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image', 'video','code','indent'],
      ['clean']
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    }
  }
  /* 
   * Quill editor formats
   * See https://quilljs.com/docs/formats/
   */
  Editor.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video','code-block'
  ]
  
  /* 
   * PropType validation
   */
  Editor.propTypes = {
    placeholder: PropTypes.string,
  }
  export default Editor;