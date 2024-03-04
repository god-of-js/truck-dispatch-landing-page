import styles from './contact.module.scss';
import Image from 'next/image';
import { useState } from 'react';
import RoundedTruckImage from '../assets/rounded-truck-img.svg';
import UiForm from '@/components/ui/UiForm';
import UiInput from '@/components/ui/UiInput';
import UiTextArea from '@/components/ui/UiTextArea';
import UiButton from '@/components/ui/UiButton';
import UiIcon from '@/components/ui/UiIcon';
import contactSchema from '@/utils/validations/contactSchema';
import { Toast } from '@/utils/toast';
import sendMessage from '@/api';

export default function ContactPage() {
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    phone:'',
    companyName: '',
    message:'',
  })
  const [loading, setLoading] = useState(false);

  function onSubmit () {    
    setLoading(true)
    sendMessage(contactData)  
    .then(()=>{
      setLoading(false)
      Toast.success({msg:'Your message has been recorded, we will get to you shortly'})
      setContactData({
        name: '',
        email: '',
        phone:'',
        companyName: '',
        message:'',
      })
    }) .catch((error)=>{
        setLoading(false)
        console.log(error);
    })
  }

  function handleChange (event: { name: string; value: string | null }) {
    setContactData({
      ...contactData,
      [event.name]: event.value,
    });
  }

  return (
    <section className={styles.main}>
      <div className={styles.main_inner}>
        <div className={styles.hero_section}>
          <Image alt='truck image Truckdispatch gettruckdispatch' src={RoundedTruckImage}/>
          <h4>
            our team is always available to receive your inquiries and quotes. A member of the truck dispatch team would reach out to you via phone or email.
          </h4>
        </div>
        <UiForm 
          schema={contactSchema}
          formData={contactData}
          onSubmit={onSubmit}
        >
           {({ errors }) => (
              <div>
                <UiInput 
                name='name'
                value={contactData.name}
                onChange={handleChange}
                error={errors.name}
                label='Name*'
                />
                <UiInput 
                name='email'
                value={contactData.email}
                onChange={handleChange}
                error={errors.email}
                label="Email Address*"
                />
                <UiInput 
                name='phone'
                type='phone'
                value={contactData.phone}
                onChange={handleChange}
                error={errors.phone}
                label='Phone*'
                />
                <UiInput 
                name='companyName'
                value={contactData.companyName}
                onChange={handleChange}
                label='Company Name*'
                />
                <UiTextArea
                name='message'
                value={contactData.message}
                onChange={handleChange}
                label='Message*'
                error={errors.message}
                />
                <UiButton loading={loading}>
                  Submit
                  <UiIcon icon='ArrowRight'/>
                </UiButton>
              </div>
           )}
        </UiForm>

      </div>
    </section>
  )
}