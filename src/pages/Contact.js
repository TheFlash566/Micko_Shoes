import { useCallback } from 'react';
import { Button, Form, Input, notification } from 'antd';
import Slider from "../components/Slider1"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"

const Contact = () => {
    const [form] = Form.useForm();
    const [api, contextHolder] = notification.useNotification();
  
    const onFinish = useCallback(
      async ({ email, name, number, message }) => {
        try {
          await fetch(
            'https://docs.google.com/forms/u/1/d/e/1FAIpQLSf2oODedboCAFPghk-BEI-YpH7ulxWjlXfmc_yNOAj58rDCtA/formResponse' +
              new URLSearchParams({
                'entry.1358189118': name,
                'entry.1289432459': message,
                'entry.1684580244': number ?? '',
                emailAddress: email,
              }),
            {
              mode: 'no-cors',
            }
          );
          api.success({
            message: 'Submitted successfully',
          });
          form.resetFields();
        } catch (e) {
          api.error({
            message: e.message,
          });
        }
      },
      [api, form]
    );
    
    return (
        <div>
            <div className="contact-bg">
                    <div className="contact">
                        <h1 style={{textAlign: 'center', fontSize: '70px', color: 'white'}}>Contact <span style={{color: 'lime'}}>Us</span></h1>
                        <p style={{textAlign: 'center', color: 'lime', fontSize: '20px', marginBottom: '1.5rem'}}>
                            Feel free to contact us any time. We will get back to you as soon as we can!
                        </p>
                        {contextHolder}
                        <Form action="" form={form} className="form"  onFinish={onFinish}>
                          
                            <Input style={{height: '50px', textIndent: '15px',}} 
                              type="text" placeholder="Enter Your Name" 
                              rules={[{ required: true, message: 'Name is required' }]} />

                            <Input style={{height: '50px', textIndent: '15px',}} 
                              type="email" placeholder="Enter Your Email"
                              rules={[{ required: true, message: 'Email is required' }]} />

                            <Input style={{height: '50px', textIndent: '15px',}} 
                              type="number" placeholder="Enter Your Number" 
                              rules={[{ required: true, message: 'Number is required' }]} />

                            <textarea name="message" id="message" cols="30" rows="10" 
                              placeholder="Enter Your Message"
                              rules={[{ required: true, message: 'Message is required' }]}
                              ></textarea>
                          <Button htmlType="submit" className="ct-button">Send</Button>
                        </Form>
                    </div>
            </div>
            <div>
                <Slider />
                <Newsletter />
                <Footer />
            </div>
        </div>
       
    )
}


export default Contact




// import React, { useState } from "react";

// const Form = () => {
//   const [submit, setSubmit] = useState(false);
//   const [formData, setFormData] = useState({
//     "entry.2037917220": "",
//     "entry.1146839265": "",
//     "entry.1451219623": ""
//   });

//   const handleInputData = (input) => (e) => {
//     const { value } = e.target;

//     setFormData((prevState) => ({
//       ...prevState,
//       [input]: value
//     }));
//   };

//   async function handleSubmit(e) {
//     e.preventDefault();
//     setSubmit(true);

//     let url = `https://docs.google.com/forms/u/0/d/e/1FAIpQLSewQli5dBi0g1S8Ve-Bz6Xr7XP4W_27mBoVJwmftpsWTkFTVQ/formResponse?entry.2037917220=${formData["entry.2037917220"]}&entry.1146839265=${formData["entry.1146839265"]}&entry.1451219623=${formData["entry.1451219623"]}`;

//     const res = await fetch(url, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded"
//       }
//     });
//   }
//   return (
//     <div className="contactFormWrapper">
//       <div className="formheader"></div>
//       <div className="formcontact">
//         {submit ? (
//           <div className="afterForm">Thanks, will get back to you soon</div>
//         ) : (
//           <form onSubmit={handleSubmit} target="_self">
//             <fieldset>
//               <label htmlFor="entry.2037917220">Name:</label>
//               <input
//                 required
//                 type="text"
//                 name="entry.2037917220"
//                 onChange={handleInputData("entry.2037917220")}
//                 value={formData["entry.2037917220"]}
//                 autoComplete={false}
//               />
//             </fieldset>

//             <fieldset>
//               <label htmlFor="entry.1146839265">E-mail:</label>
//               <input
//                 required
//                 type="email"
//                 name="entry.1146839265"
//                 onChange={handleInputData("entry.1146839265")}
//                 value={formData["entry.1146839265"]}
//                 autoComplete={false}
//               />
//             </fieldset>

//             <fieldset>
//               <label htmlFor="entry.1451219623">Message:</label>
//               <textarea
//                 required
//                 name="entry.1451219623"
//                 rows="4"
//                 cols="10"
//                 onChange={handleInputData("entry.1451219623")}
//                 value={formData["entry.1451219623"]}
//                 autoComplete={false}
//               ></textarea>
//             </fieldset>

//             <button type="submit">Connect</button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Form;

