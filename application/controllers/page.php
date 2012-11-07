<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Page extends CI_Controller{
    
    public function __construct() {
        parent::__construct();
        $uri1 = $this->uri->segment(2);
        if($uri1 == 'index' OR $uri1 == 'detail'){
            return true;
        } else {
            redirect('/');
        }
    }
    
    public function index(){
        $this->detail();
    }
    
    public function detail(){
        $segment = $this->uri->segment(3);
        if($segment == 'mindtalk'){
            $data = array(
                'title' => 'PT Ansvia :: About',
                'description' => 'About PT Ansvia :: Mindtalk',
                'keyword' => 'about mindtalk, ansvia, mindtalk'
            );
            $this->template->meta($data);
            $this->template->view('about');
        } if($segment == 'tos') {
            $data = array(
                'title' => 'PT Ansvia :: Term of Service',
                'description' => 'Term of Service of PT Ansvia a.k.a Mindtalk',
                'keyword' => 'tos, term of service, tos mindtalk'
            );
            $this->template->meta($data);
            $this->template->view('tos');
        } if($segment == 'contact') {
            $data = array(
                'title' => 'PT Ansvia :: Contact',
                'description' => 'Contact our PT Ansvia / Mindtalk Team',
                'keyword' => 'contact ansvia, ansvia contact, mindtalk contact'
            );
            $this->template->meta($data);
            $this->template->view('contact');
        }
    }
}