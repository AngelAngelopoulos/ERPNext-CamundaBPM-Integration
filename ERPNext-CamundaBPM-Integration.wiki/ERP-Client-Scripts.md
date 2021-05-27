# Form Script
ERP allows the use of scripts, these scripts let add client side logic to the forms through javaScript.

_*Note: this scripts also can be added in the server side by using Python._}

A {doctype}.js is always created when a new Doctype is created, this is where we can write the new form script

### Syntax:

```
frappe.ui.form.on(doctype, {
    event1() {
        // handle event 1
    },
    event2() {
        // handle event 2
    }
})

```

After the use of the "form" it is neccessary to use a Form Event, this events triggers the Form Scripts.
The Events use _**frm**_ as the first parameter in their handler functions. 

### Form Events

Here are the list of the most common Form Events used:
* _**setup**_ - triggered once the form is created for the first time
* _**before_load**_ - triggered before the form is about to load
* _**onload**_ - triggered when the form is loaded and is about to render
* _**refresh**_ - triggered when the form is loaded and rendered.
* _**onload_post_render**_ - triggered after the form is loaded and rendered
* _**validate**_ - triggered before before_save
* _**before_save**_ - triggered before save is called
* _**after_save**_ - triggered after form is saved
* _**before_submit**_ - triggered before submit is called
* _**on_submit**_ - triggered after form is submitted
* _**before_cancel**_ - triggered before cancel is called
* _**after_cancel**_ - triggered after form is cancelled
* _**timeline_refresh**_ - triggered after form timeline is rendered
* _**{fieldname}_on_form_rendered**_ - triggered when a row is opened as a form in a Table field
* _**{fieldname}**_ - triggered when the value of fieldname is changed

## Client Scripts

Client Scripts are Custom Form Scripts that were written for a specific logic used in a site.

### Create a Client Script

To create a new Client Script to be used it´s neccessary to access the frappe framework, right in there the following steps are:

**Home > Customization > Client Script > Click the "New" option**

![Client Script creation example](https://frappeframework.com/docs/assets/img/client-script-form.png)

