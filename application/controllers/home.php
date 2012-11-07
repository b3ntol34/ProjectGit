<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Home extends CI_Controller{
    
    public function __construct() {
        parent::__construct();
    }
    
    public function index(){
        $data = array(
            'title' => 'PT Ansvia',
            'description' => 'Handle Mindtalk (Social Media)',
            'keyword' => 'pt ansvia, ansvia, mindtalk'
        );
        $this->template->meta($data);
        $this->template->view('home');
    }
}