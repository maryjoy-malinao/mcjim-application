import { Editor } from '@tinymce/tinymce-react';
const api = 'rjcjiccvnlwv6smqudhmobt5pajtuegbu4ne5t85kablk7qv'
export default function TinyMCE({handleOnChange}) {
   
  return (
    <div>
        <Editor
            apiKey={api}
            onEditorChange={(newValue) => handleOnChange('', {name: 'job_desc', value: newValue})}
            // value={initVal}
            init={{
                height: 300,
                plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss',
                toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                tinycomments_mode: 'embedded',
                tinycomments_author: 'Author name',
                ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
            }}
        />
    </div>
  )
}