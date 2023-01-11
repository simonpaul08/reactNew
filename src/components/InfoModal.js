import React from 'react';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Modal } from '@mui/material';

function InformationModal(props) {

    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
    };

    // console.log(props)

    return (
        <div>
            <Modal
                className="modal-remove_bg"
                open={props?.open}
                onClose={props?.handleInfoClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <a href="#" className="dismiss-icon" onClick={props?.handleInfoClose}>
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.6584 0.164062L6.00008 4.8224L1.34175 0.164062L0.166748 1.33906L4.82508 5.9974L0.166748 10.6557L1.34175 11.8307L6.00008 7.1724L10.6584 11.8307L11.8334 10.6557L7.17508 5.9974L11.8334 1.33906L10.6584 0.164062Z"
                                fill="#ffffff"
                            />
                        </svg>
                    </a>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {/* <img src={popicon} alt="images" className="modal-image" /> */}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {props?.message}
                    </Typography>
                    <div className="button-grp">
                        <Link to={props?.routing}>
                            <button type="submit" className="btn-log_reg me-2">
                                Okay
                            </button>
                        </Link>

                        <button type="submit" className="btn-log_reg" onClick={props?.handleInfoClose}>
                            Cancel
                        </button>

                    </div>
                </Box>
            </Modal>
        </div>
    )
}

export default InformationModal