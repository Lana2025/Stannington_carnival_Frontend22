import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import AddStall from "./AddStall";
import "./StallBookingForm.css";

const StallBookingForm = (props) => {
  const navigate = useNavigate();
  const [checkUserID, setCheckUserID] = useState();
  const [checkUserEmail, setCheckUserEmail] = useState();

  //react hook form
  const {
    label,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    shouldUseNativeValidation: true,
  });

  //handle submit when the role is admin and stall holder
  const onSubmit = async (item) => {
    console.log(item);
    if (props.role === "admin") {
      props.client.addBooking(
        item.businessName,
        item.stallType,
        item.comments,
        item.bstatus,
        item.pitch,
        item.date,
        item.userid
      );
    } else {
      props.client.addBooking(
        item.businessName,
        item.stallType,
        item.comments,
        item.bstatus,
        item.pitch,
        item.date,
        props.userid
      );
    }
<<<<<<< 82-create-pagination-for-the-bookings

=======
>>>>>>> main
    console.log(props.role, props.userid);
    navigate("/dashboard");
  };

  //check handleSubmit user details if the user exist
  const checkUserDetails = async (item) => {
    const checkEmail = await props.client.getUserByEmail(item.email);

    console.log(checkEmail.data);
    setCheckUserID(checkEmail.data._id);
    setCheckUserEmail(checkEmail.data.email);

    if (checkEmail.data.length === 0) {
      alert("No Email found");
    } else {
      alert("The user with this email already exists");
    }
  };

  useEffect(() => {}, [checkUserID, checkUserEmail]);

  //booking through admin's dashboard
  const adminBooking = () => {
    if (props.role !== "admin") {
      return (
        <form className="booking-container" onSubmit={handleSubmit(onSubmit)}>
          <div className="booking-form-box">
<<<<<<< 82-create-pagination-for-the-bookings
            <div className="input-wrap">
              <label>Business name</label>
              <div>
                <input
                  type="text"
                  {...register("businessName", {
                    required: {
                      value: true,
                      message: "Business name is required",
                    },
                  })}
                />
              </div>
            </div>

            <div className="input-wrap">
              <label>Select</label>
=======
            <div className="labels">
              <label>Business name</label>
              <input
                type="text"
                {...register("businessName", {
                  required: {
                    value: true,
                    message: "Business name is required",
                  },
                })}
              />
            </div>

            <div className="labels">
              <label>Stall type</label>
>>>>>>> main
              <select
                {...register("stallType", {
                  required: {
                    value: true,
                    message: "Choose the category of the stall",
                  },
                })}
              >
                <option value="">Select...</option>

                <option value="craft">Craft</option>

                <option value="donation">Donation</option>

                <option value="food">Food Stall</option>

                <option value="commercial">Commercial Items</option>
              </select>
            </div>
<<<<<<< 82-create-pagination-for-the-bookings

            <div className="input-wrap">
              <label>Comments</label>
              <textarea
                type="textarea"
                className="booking-textarea"
                rows="6"
                {...register("comments", {
                  required: {
                    value: true,
                    message:
                      "Tell us what you will be selling / promoting at the carnival ",
                  },
                })}
              />
            </div>
=======
            <div>
              <div className="labels">
                <label>Comments</label>
                <textarea
                  type="textarea"
                  className="booking-textarea"
                  rows="6"
                  {...register("comments", {
                    required: {
                      value: true,
                      message:
                        "Tell us what you will be selling / promoting at the carnival ",
                    },
                  })}
                  placeholder="Comments"
                />
              </div>
>>>>>>> main

              <Button className="add-button" variant="custom" type="submit">
                Add Booking
              </Button>
            </div>
          </div>
        </form>
      );
    } else {
      return (
        <div>
          <div className="addNewStaff">
            <AddStall checkUserDetails={checkUserDetails} />
            <Link to="/addUser" className="btn btn-custom btn-change">
              Add User
            </Link>
          </div>
          <form className="booking-container" onSubmit={handleSubmit(onSubmit)}>
            <div className="booking-form-box">
              <div className="input-wrap">
                <label>User id</label>
                <input
                  type="text"
                  value={checkUserID}
                  {...register("userid", {
                    required: {
                      value: true,
                    },
                  })}
<<<<<<< 82-create-pagination-for-the-bookings
                  // placeholder="User Id"
                />
              </div>
              <div className="input-wrap">
                <label>Email</label>
                <input type="text" value={checkUserEmail} />
              </div>
              <div className="input-wrap">
                <label>Business name</label>
=======
                  placeholder="UserId"
                  className="hidden"
                />
              </div>
              <input
                type="text"
                value={checkUserEmail}
                placeholder="User Email"
              />

              <div>
>>>>>>> main
                <input
                  type="text"
                  {...register("businessName", {
                    required: {
                      value: true,
                      message: "Business name is required",
                    },
                  })}
                  // placeholder="Bus"
                />
              </div>

              <div className="input-wrap">
                <label>Select</label>
                <select
                  {...register("stallType", {
                    required: {
                      value: true,
                      message: "Choose the category of the stall",
                    },
                  })}
                >
                  <option value="">Select...</option>

                  <option value="craft">Craft</option>

                  <option value="donation">Donation</option>

                  <option value="food">Food Stall</option>

                  <option value="commercial">Commercial Items</option>
                </select>
              </div>
              <div className="input-wrap">
                <label>Comments</label>
                <textarea
                  type="textarea"
                  className="booking-textarea"
                  rows="6"
                  {...register("comments", {
                    required: {
                      value: true,
                      message:
                        "Tell us what you will be selling / promoting at the carnival ",
                    },
                  })}
                  // placeholder="Comments"
                />
              </div>

              <Button className="add-button" variant="custom" type="submit">
                Add Booking
              </Button>
            </div>
          </form>
        </div>
      );
    }
  };

<<<<<<< 82-create-pagination-for-the-bookings
  return (
    <>
      <AddStall checkUserDetails={checkUserDetails} />
      <Link to="/addUser" className="btn btn-custom btn-change btn-adduser">
        Add User
      </Link>
      {adminBooking()}
    </>
  );
=======
  return <>{adminBooking()}</>;
>>>>>>> main
};

export default StallBookingForm;
