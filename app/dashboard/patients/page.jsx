import React from 'react'
import styles from "@/app/ui/dashboard/patients/patients.module.css";
import Image from "next/image";
import Link from "next/link";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";

const Patients = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a patient..." />
        <Link href="/dashboard/patients/add">
          <button className={styles.addButton}>Add Patient</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>NIN</td>
            <td>Phone Number</td>
            <td>Location</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          
            <tr>
            <td>0001</td>
              <td>
                <div className={styles.user}>
                  <Image
                    src="/noavatar.png"
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                 John Amos
                </div>
              </td>
              <td>johnamos@gmail.com</td>
              <td>13.01.2024</td>
              <td>Patient</td>
              
              <td>12345678987</td>
              <td>+234098765432</td>
              <td>Abuja</td>
              <td>Active</td>

              <td>
                <div className={styles.buttons}>
                  <Link href="/dashboard/patients/test">
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                    </div>
              </td>
            </tr>
         
        </tbody>
        
        <tbody>
            <tr>
            <td>0002</td>
              <td>
                <div className={styles.user}>
                  <Image
                    src="/noavatar.png"
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                 Skepta Loius
                </div>
              </td>
              <td>johnamos@gmail.com</td>
              <td>13.01.2024</td>
              <td>Patient</td>
              
              <td>12345678987</td>
              <td>+234098765432</td>
              <td>Abuja</td>
              <td>Active</td>

              <td>
                <div className={styles.buttons}>
                  <Link href="/">
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                    </div>
              </td>
            </tr>
         
        </tbody>

        <tbody>
            <tr>
            <td>0003</td>
              <td>
                <div className={styles.user}>
                  <Image
                    src="/noavatar.png"
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                 Ryan Patrick
                </div>
              </td>
              <td>johnamos@gmail.com</td>
              <td>13.01.2024</td>
              <td>Patient</td>
              
              <td>12345678987</td>
              <td>+234098765432</td>
              <td>Abuja</td>
              <td>Active</td>

              <td>
                <div className={styles.buttons}>
                  <Link href="/">
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                    </div>
              </td>
            </tr>
        </tbody>

        <tbody>
            <tr>
            <td>0004</td>
              <td>
                <div className={styles.user}>
                  <Image
                    src="/noavatar.png"
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                 Albert Einstein
                </div>
              </td>
              <td>johnamos@gmail.com</td>
              <td>13.01.2024</td>
              <td>Patient</td>
              
              <td>12345678987</td>
              <td>+234098765432</td>
              <td>Abuja</td>
              <td>Active</td>

              <td>
                <div className={styles.buttons}>
                  <Link href="/">
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                    </div>
              </td>
            </tr>
         
        </tbody>

      </table>
      <Pagination />
    </div>
  );
};



export default Patients