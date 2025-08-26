"use client";

import React, { useContext, useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addNewUserFormControls, addNewUserFormInitialState } from "@/utils";
import { addNewUserAction, editUserAction } from "@/actions";
import { UserContext } from "@/context";

const AddNewUser = () => {
  const {
    openPopup,
    setOpenPopup,
    addNewuserFormData,
    setAddNewuserFormData,
    currentEditedId,
    setCurrentEditedId,
  } = useContext(UserContext);

  console.log(currentEditedId);
  async function handleAddNewUserAction(e) {
    e.preventDefault();
    console.log(addNewuserFormData);
    //revalidate the path that is refresh the page when user added edited or deleted
    const result =
      currentEditedId !== null
        ? await editUserAction(
            currentEditedId,
            addNewuserFormData,
            "/user-management"
          )
        : await addNewUserAction(addNewuserFormData, "/user-management");
    console.log(typeof result, result);
    setOpenPopup(false);
    setAddNewuserFormData(addNewUserFormInitialState);
    setCurrentEditedId(null);
  }
  return (
    <div>
      <Button onClick={() => setOpenPopup(true)}>Add new user</Button>

      <Dialog
        open={openPopup}
        onOpenChange={() => {
          setOpenPopup(false);
          setAddNewuserFormData(addNewUserFormInitialState);
          setCurrentEditedId(null);
        }}
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              {currentEditedId !== null ? "Edit User" : "Add new user"}
            </DialogTitle>
          </DialogHeader>
          <form
            onSubmit={(e) => handleAddNewUserAction(e)}
            className="grid gap-4 py-4"
          >
            <div className="grid grid-cols-4 items-center gap-4">
              {addNewUserFormControls.map((controlItem) => {
                return (
                  <div key={controlItem.name} className="col-span-3">
                    <Label htmlFor={controlItem.name} className="text-right">
                      {controlItem.label}
                    </Label>
                    <Input
                      id={controlItem.name}
                      placeholder={controlItem.placeholder}
                      name={controlItem.name}
                      type={controlItem.type}
                      className="col-span-3"
                      value={addNewuserFormData[controlItem.name]}
                      onChange={(e) =>
                        setAddNewuserFormData({
                          ...addNewuserFormData,
                          [controlItem.name]: e.target.value,
                        })
                      }
                    />
                  </div>
                );
              })}
            </div>
            <DialogFooter>
              <Button type="submit">Save</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddNewUser;
