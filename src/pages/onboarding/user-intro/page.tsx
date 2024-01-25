import React from "react";
import Input from "@/shared/ui/input";
import Button from "@/shared/ui/button";

const UserIntroPage: React.FC = () => {
  return (
    <>
      <img
        src="/background-pattern.svg"
        alt="background"
        className="absolute right-1/2 -translate-y-32 translate-x-1/2 md:translate-y-0"
      />
      <div className="container relative z-10 mx-auto flex min-h-screen flex-col px-5 py-16 md:items-center md:justify-center md:p-0">
        <div className="flex flex-col gap-12">
          <img src="/user-intro.svg" alt="user" className="h-14 w-14" />
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-bold">Please, introduce yourself </h1>
            <div className="flex flex-col items-start gap-1 md:flex-row">
              <p className="text-[#475467]">
                You can do this later on Profile page.{" "}
              </p>
              <button className="text-[#004EEB]">Skip</button>
            </div>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col gap-8 md:flex-row">
              <div className="flex flex-col gap-1">
                <p className="text-xs">First name</p>
                <Input
                  className="border-gray-300"
                  placeholder="First name"
                  name="name"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xs">Last name</p>
                <Input
                  className="border-gray-300"
                  placeholder="Last name"
                  name="name"
                />
              </div>
            </div>
            <Button className="bg-[#155EEF] text-white">Continue</Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserIntroPage;
