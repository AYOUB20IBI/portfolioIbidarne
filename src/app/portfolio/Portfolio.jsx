import './Portfolio.css'
import {useEffect, useState } from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

import data from '../data/data'
import { Modal } from 'react-bootstrap';
import LoadingPage from './../loadingPage/LoadingPage';
import { Link } from 'react-router-dom';
function Portfolio() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showPro, setShowPro] = useState(null);
  const [dataProjects, setDataProjects] = useState(data);
  const [searchData, setSearchData] = useState(null);

  const [isLoading, setIsLoading] = useState(Boolean(true));
  useEffect(()=>{
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  },[])

  useEffect(()=>{
    document.title='IBIDARNE | My Projects'
  },[])

  const showProject = (id) => {
    const foundProject = dataProjects.find((item) => id === item.id);
    setShowPro(foundProject);
    handleShow()
  };

  const handleSearcheByCode = (code) => {
    console.log(code);
    return data.filter(item => item.type.includes(code));
  }
  return (
    <>
    {isLoading ? (
        <LoadingPage />
      ) : (
      <section className="projects">
        <div className="container">
          <div className="title_section_projects">
            <h1>MY <span>PROJECTS</span></h1>
          </div>
          <div className="filltrage" style={{marginBottom:'2rem'}}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label" style={{
                  color:'#fff',
                  background: '#24252e',
                  padding: '5px',
                  borderRadius: '20px',
                  fontWeight: '700'
                }}>
                  Select Language Project
                </InputLabel>
                <Select 
                  color="error"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                  onChange={(e) => setSearchData(handleSearcheByCode(e.target.value))}
                >
                  <MenuItem value={null}>All Projects</MenuItem>
                  <MenuItem value="HTML & CSS">HTML & CSS</MenuItem>
                  <MenuItem value="JavaScript">JavaScript</MenuItem>
                  <MenuItem value="Bootstrap">Bootstrap</MenuItem>
                  <MenuItem value="PHP & MYSQL">PHP & MYSQL</MenuItem>
                  <MenuItem value="Laravel">Laravel</MenuItem>
                  <MenuItem value="React & MUI">React & MUI</MenuItem>
                  <MenuItem value="Node & Express">Node & Express</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          <div className='show_projects'>
            {/* search */}
            {searchData &&
              searchData.map((item,index)=>(
                <>
                <div className="card_project" key={index}>
                  <div className="content">
                    <div className="back">
                      <div className="back-content" style={{
                        backgroundImage:`linear-gradient(to right, rgb(0 0 0), rgb(0 0 0 / 12%)), url(${item.poster})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'}}>
                        <i style={{fontSize: '3rem'}} className="fa-solid fa-code"></i>
                        <strong>{item.title}</strong>
                      </div>
                    </div>
                    <div className="front">
                      
                      <div className="img">
                        <div className="circle">
                        </div>
                        <div className="circle" id="right">
                        </div>
                        <div className="circle" id="bottom">
                        </div>
                      </div>

                      <div className="front-content">
                        <small className="badge">Web Development</small>
                        <div className="description">
                          <div className="title">
                            <p className="title">
                              <strong>{item.title}</strong>
                            </p>
                            <svg fillRule="nonzero" height="15px" width="15px" viewBox="0,0,256,256"  xmlns="http://www.w3.org/2000/svg">
                            <g style={{mixblendmode: 'normal'}} textAnchor="none" fontSize="none" fontWeight="none" fontFamily="none" strokeDashoffset="0" strokeDasharray="" strokeMiterlimit="10" strokeLinejoin="miter" strokeLinecap="butt" strokeWidth="1" stroke="none" fillRule="nonzero" fill="#20c997"><g transform="scale(8,8)"><path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path></g></g></svg>
                          </div>
                          <p className="card-footer">
                            {item.description}
                          </p>
                          <div className='d-flex justify-content-center align-items-center'>
                            <button className="button" onClick={()=>showProject(item.id)}>
                              <span className="button_lg">
                                <span className="button_sl"></span>
                                <span className="button_text"><i className="fa-solid fa-tv"></i> PREVIEW</span>
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </>
              ))
            }
            {/* get all data */}
            {dataProjects && searchData===null &&
              dataProjects.map((item,index)=>(
                <>
                <div className="card_project" key={index}>
                  <div className="content">
                    <div className="back">
                      <div className="back-content" style={{
                        backgroundImage:`linear-gradient(to right, rgb(0 0 0), rgb(0 0 0 / 12%)), url(${item.poster})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'}}>
                        <i style={{fontSize: '3rem'}} className="fa-solid fa-code"></i>
                        <strong>{item.title}</strong>
                      </div>
                    </div>
                    <div className="front">
                      
                      <div className="img">
                        <div className="circle">
                        </div>
                        <div className="circle" id="right">
                        </div>
                        <div className="circle" id="bottom">
                        </div>
                      </div>

                      <div className="front-content">
                        <small className="badge">Web Development</small>
                        <div className="description">
                          <div className="title">
                            <p className="title">
                              <strong>{item.title}</strong>
                            </p>
                            <svg fillRule="nonzero" height="15px" width="15px" viewBox="0,0,256,256"  xmlns="http://www.w3.org/2000/svg">
                            <g style={{mixblendmode: 'normal'}} textAnchor="none" fontSize="none" fontWeight="none" fontFamily="none" strokeDashoffset="0" strokeDasharray="" strokeMiterlimit="10" strokeLinejoin="miter" strokeLinecap="butt" strokeWidth="1" stroke="none" fillRule="nonzero" fill="#20c997"><g transform="scale(8,8)"><path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path></g></g></svg>
                          </div>
                          <p className="card-footer">
                            {item.description}
                          </p>
                          <div className='d-flex justify-content-center align-items-center'>
                            <button className="button" onClick={()=>showProject(item.id)}>
                              <span className="button_lg">
                                <span className="button_sl"></span>
                                <span className="button_text"><i className="fa-solid fa-tv"></i> PREVIEW</span>
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </>
              ))
            }
          </div>
        </div>
        
        {showPro && (
          <Modal show={show} onHide={handleClose} centered>
            <div  className="modal-content" style={{ background: '#111111' }}>
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel" style={{
                  color: '#fff',
                  textTransform: 'uppercase',
                  fontWeight: 'bold'
                }}>{showPro.title}</h1>
                <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}>
                  <i className="fa-solid fa-circle-xmark" style={{ color: '#fff', fontSize: '30px' }}></i>
                </button>
              </div>
              <div className="modal-body">
                <div className='d-flex justify-content-center align-items-center'>
                  <div style={{ width: '70%', overflow: 'hidden' }}>
                    <img src={showPro.qrCode} alt="" style={{ width: '100%', height: '50vh' }} />
                  </div>
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                  <button className="button">
                    <span className="button_lg">
                      <span className="button_sl"></span>
                      <Link to={showPro.link}>
                        <span className="button_text"><i className="fa-solid fa-jet-fighter"></i> LIVE PREVIEW</span>
                      </Link>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </Modal>
        )}
      </section>
      )}
    </>
  )
}

export default Portfolio;












