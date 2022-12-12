import React from 'react'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import './contact.css';
import { Button, Grid, useInput, Textarea, Input } from "@nextui-org/react";
import { useRef, Component } from 'react';
import emailjs from '@emailjs/browser';
import { useRive, useStateMachineInput } from "@rive-app/react-canvas";




const Contact = () => {

  let [isOpen, setIsOpen] = useState(true)

  const [disabled, setDisabled] = useState(false);

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const { value, reset, bindings } = useInput("");

  const validateEmail = (value) => {

    return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
  };
  const empEmail = (value) => {

    return value.length == 0 ? setDisabled(false) : setDisabled(true);
  };
  const helper = React.useMemo(() => {
    if (!value) {
      setDisabled(true)
      return {

        text: "",
        color: "",
      };
    };
    setDisabled(false)
    const isValid = validateEmail(value);


    return {
      text: isValid ? "Correct email" : "Enter a valid email",
      color: isValid ? "success" : "error",
    };
  }, [value]);


  function handleChange(value2) {
    if (value2.target.value.length == 0) {
      setDisabled(true);
    }
    else {
      setDisabled(false);
    }
  }



  const form = useRef();

  const sendEmail = (e) => {

    setDisabled(false);
    e.preventDefault();

    emailjs.sendForm('service_h11q0b5', 'template_1gpaknq', form.current, 'sqnBQ0kMdHHHOLPRy')
      .then((result) => {
        if (validateEmail(value) === true) {
          console.log(result.text);
          openModal();
          console.log("message sent");
        }

      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <section id='contact' >
      <h1 className='text-center'>Contact</h1>
      <form ref={form} onSubmit={sendEmail} className='flex flex-col items-center gap-16 p-6 mx-auto'>
        <Input
          {...bindings}
          clearable
          shadow={false}
          onClearClick={reset}
          status={helper.color}
          color={helper.color}

          helperColor={helper.color}
          helperText={helper.text}

          type="email"
          label="Email"
          placeholder="meric@gmail.com"
          size="md"
          width='300px'
          name='user_email'
        />

        <Textarea
          bordered
          color="secondary"
          labelPlaceholder="Message"
          size="md"
          rows={5}
          name='message'
          width='300px'
        />

        <Button disabled={disabled} type="submit" value="Send" shadow color="gradient" auto>
          Send
        </Button>



      </form>
      {/* <div className="py-4 lg:py-4 px-4 mx-auto max-w-screen-mditems-center">

        <h1 className='text-center'>Contact</h1>

        <form ref={form} onSubmit={sendEmail} className="space-y-4 ">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500">Your email</label>
            <input type="email" name='user_email' className="shadow-sm  border text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-slate-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com" required></input>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500">Your message</label>
            <textarea name='message' rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-slate-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>

          <Button type="submit" value="Send" shadow color="success" auto>
            Send Message
          </Button>

        </form>
      </div> */}






    </section>
  )
}

export default Contact