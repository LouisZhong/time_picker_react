import './Style.css'

function App() {
  return (
    <div className='container'>
      <div className='input-container'>        
        <p className="input-header">
          <span class="material-symbols-outlined">event</span>
          入住日期 - 退房日期
        </p>
        <input placeholder='2023/06/19 - 2023/06/20'/>
      </div>
      <div className="date-container">
        <div className="date-header">
          <button>Prev</button>
          <button>Jun 2023</button>
          <button>Next</button>
        </div>
        <div className="date-body">
          <ul className="week-list">
            <li><span>Sun</span></li>
            <li><span>Mon</span></li>
            <li><span>Tue</span></li>
            <li><span>Wen</span></li>
            <li><span>Thu</span></li>
            <li><span>Fri</span></li>
            <li><span>Sat</span></li>
          </ul>
          <ul className="date-list">
            <li><span>1</span></li>
            <li><span>2</span></li>
            <li><span>3</span></li>
            <li><span>4</span></li>
            <li><span>5</span></li>
            <li><span>6</span></li>
            <li><span>7</span></li>
            <li><span>8</span></li>
            <li><span>9</span></li>
            <li><span>10</span></li>
            <li><span>11</span></li>
            <li><span>12</span></li>
            <li><span>13</span></li>
            <li><span>14</span></li>
            <li><span>15</span></li>
            <li><span>16</span></li>
            <li><span>17</span></li>
            <li><span>18</span></li>
            <li><span>19</span></li>
            <li><span>20</span></li>
            <li><span>21</span></li>
            <li><span>22</span></li>
            <li><span>23</span></li>
            <li><span>24</span></li>
            <li><span>25</span></li>
            <li><span>26</span></li>
            <li><span>27</span></li>
            <li><span>28</span></li>
            <li><span>29</span></li>
            <li><span>30</span></li>
            <li><span>31</span></li>
          </ul>
        </div>        
      </div>
    </div>
    
  );
}

export default App;
