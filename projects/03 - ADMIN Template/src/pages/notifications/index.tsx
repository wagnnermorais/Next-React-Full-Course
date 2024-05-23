import Layout from "@/components/template/Layout";
import useAppData from "@/hooks/useAppData";

export default function Notifications() {
  const { handleToggleTheme } = useAppData();
  return (
    <div>
      <Layout
        title="Notifications management"
        subtitle="Manage your notifications here"
      >
        <button onClick={handleToggleTheme}>Click</button>
      </Layout>
    </div>
  );
}
