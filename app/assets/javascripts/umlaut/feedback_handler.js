/**
 * Created by romc on 18-12-13.
 */
$(document).ready(function(){
    /**
     * Dynamically generate checkbox to prevent spambots
     */
    var checkboxLabel =  $('#js_checkbox_label')
    var checkbox = "<input type='checkbox' label='" + checkboxLabel.text() + "' name='not_a_bot' value='true'/>";
    checkboxLabel.before(checkbox);

    /**
     * Intercept feedback email to prevent page change
     * replace form content with feedback response on success
     */
    $('#js_feedback').submit(function(){
       feedback = $(this);
       feedback.parents('.modal-body').load(feedback.attr('action'), feedback.serializeArray());
       return false;
   })
});