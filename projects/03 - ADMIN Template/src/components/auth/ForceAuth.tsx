import Head from "next/head";
import useAuth from "@/hooks/useAuth";
import Image from "next/image";
import router from "next/router";

export default function ForceAuth(props) {
  const { user, loader } = useAuth();

  const renderContent = () => {
    return (
      <>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
          if (!document.cookie?.includes("admin-template-cod3r-auth)) {
            window.location.href = "/auth"
          }
        `,
            }}
          />
        </Head>
        {props.children}
      </>
    );
  };

  const loadingRender = () => {
    return (
      <div className="flex justify-center items-center h-screen">
        <Image src={"/images/loader.gif"} alt="Loader" width={86} height={86} />
      </div>
    );
  };

  if (!loader && user?.email) {
    return renderContent();
  } else if (loader) {
    return loadingRender();
  } else {
    router.push("/auth");
    return null;
  }
}
