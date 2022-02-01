import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchListingPorject } from "../../redux/actions/listingProjects";
import DataTable from "react-data-table-component";
import { Button, Card } from "react-bootstrap";

import Header from "../Header";
import { useHistory } from "react-router-dom";
import { fetchDeleteProject } from "../../redux/actions/deleteProject";
import { Link } from "react-router-dom";

export default function Listing() {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchListingPorject());
  }, []);

  const { listingProjectData = null, listingDataLoading = false } = useSelector(
    (state) => ({
      listingProjectData: state.listingData?.data,
      listingDataLoading: state.listingData?.isLoading,
    })
  );
  console.log(listingProjectData);

  const gotoEditProject = (row) => {
    history.push({ pathname: `/edit-project/${row?.id}`, state: row });
  };

  const deleteProject = (row) => {
    window.confirm("Are you sure you wish to delete this project?")
      ? dispatch(fetchDeleteProject({ id: row?.id })).then(() => {
          dispatch(fetchListingPorject());
        })
      : console.log("cancel");
  };

  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
    },
    // {
    //   name: "PDF",
    //   selector: (row) => row.projectUrl,
    //   sortable: true,
    // },
    // {
    //   name: "Tags",
    //   selector: (row) => row.tags,
    //   sortable: true,
    //   cell: (row) =>
    //     row.tags.map((d) => {
    //       return <Button>{d}</Button>;
    //     }),
    // },
    // {
    //   name: "Team",
    //   selector: (row) => row.team,
    //   sortable: true,
    // },
    // {
    //   name: "Tools",
    //   selector: (row) => row.tools,
    //   sortable: true,
    // },
    // {
    //   name: "Duration",
    //   selector: (row) => row.tools,
    //   sortable: true,
    // },
    {
      name: "Description",
      selector: (row) => row.description,
      sortable: true,
    },
    // {
    //   name: "ReadMoreDescription",
    //   selector: (row) => row.moreDescription,
    //   sortable: true,
    // },
    {
      name: "Actions",
      selector: (row) => row.moreDescription,
      sortable: true,
      cell: (row) => (
        <div>
          <Button
            className="ml-2 mr-2"
            style={{ marginRight: "10px" }}
            onClick={() => {
              gotoEditProject(row);
            }}
          >
            Edit
          </Button>
          <Button
            className="ml-2 mr-2"
            onClick={() => {
              deleteProject(row);
            }}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  // const data = [
  //   {
  //     id: 1,
  //     title: "Beetlejuice",
  //     year: "1988",
  //   },
  //   {
  //     id: 2,
  //     title: "Ghostbusters",
  //     year: "1984",
  //   },
  // ];

  return (
    <>
      <Header />
      <div className="sub-header">
        <div className="container">
          <div className="sub-wapper">
            <div className="float-right">
              <Link to="add-project">
                <Button>Add New Project</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <section className="tab-sec">
        <div className="container">
          <Card>
            <Card.Header>All Projects</Card.Header>
            <DataTable
              columns={columns}
              data={listingProjectData || []}
              customStyles={customStyles}
              progressPending={listingDataLoading}
            />
          </Card>
        </div>
      </section>
    </>
  );
}

const customStyles = {
  rows: {
    style: {
      minHeight: "72px", // override the row height
    },
  },
  headCells: {
    style: {
      paddingLeft: "8px", // override the cell padding for head cells
      paddingRight: "8px",
    },
  },
  cells: {
    style: {
      paddingLeft: "8px", // override the cell padding for data cells
      paddingRight: "8px",
    },
  },
};
