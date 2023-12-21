const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="bg-neutral-800 authPageLayoutDiv h-screen flex items-center justify-center items-center">
        {children}
      </div>
    </>
  );
};

export default AuthLayout;
