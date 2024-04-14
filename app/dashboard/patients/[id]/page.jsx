import styles from "@/app/ui/dashboard/patients/singlePatient/singlePatient.module.css";
import Image from "next/image";

const SinglePatientPage = () => {

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/earnestavater.png" alt="" fill />
        </div>
        Dr. Earnest
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="hidden" name="id" />
          <label>Username</label>
          <input type="text" name="username" placeholder="Dr. Earnest" />
          <label>Email</label>
          <input type="email" name="email" placeholder="earnestadmin@gmail.com" />
          <label>Password</label>
          <input type="password" name="password" />
          <label>Phone</label>
          <input type="text" name="phone" placeholder="+2348906543215" />
          <label>Address</label>
          <textarea type="text" name="address" placeholder="567, Maitama Abuja, Nigeria" />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SinglePatientPage;