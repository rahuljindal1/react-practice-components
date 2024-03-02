import { FaPlus, FaMinus } from "react-icons/fa";

export const treeViewConfig = {
  ExpandIcon: <FaPlus />,
  CollapseIcon: <FaMinus />,
  parent: {
    title: "Home",
    onClick: () => {
      console.log("Home button is clicked");
    },
    children: [
      {
        parent: {
          title: "Child 1.1",
          onClick: () => {
            console.log("Child 1.1 button is clicked");
          },
          children: [],
        },
      },
      {
        parent: {
          title: "Child 1.2",
          onClick: () => {
            console.log("Child 1.2 button is clicked");
          },
          children: [
            {
              parent: {
                title: "Child 2.1",
                onClick: () => {
                  console.log("Child 2.1 button is clicked");
                },
                children: [],
              },
            },
          ],
        },
      },
      {
        parent: {
          title: "Child 1.3",
          onClick: () => {
            console.log("Child 1.3 button is clicked");
          },
          children: [
            {
              parent: {
                title: "Child 2.1",
                onClick: () => {
                  console.log("Child 2.1 button is clicked");
                },
                children: [],
              },
            },
          ],
        },
      },
    ],
  },
};
