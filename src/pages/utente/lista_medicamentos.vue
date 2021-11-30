<template>

  <q-page padding class="q-pb-sm" id="app"> 

    
   <q-breadcrumbs style="margin-top: 0em" >
            <q-breadcrumbs-el icon="home" to="/utente" />
            <q-breadcrumbs-el
              label="Medicamentos"
              icon="widgets"
              to="/utente"
            />
            <q-breadcrumbs-el label="" icon="Message" />
    </q-breadcrumbs>

    <div >
     <div class="q-pb-sm" align="right">

      <q-input
        rounded 
        outlined 
        color="teal" 
        style=" width: 30vh"
        v-model="filter"
        debounce="300"
        placeholder="pracetamol, contrametazol, aftas"  
      >
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
     </div>
    
    
    

   
    
    <div
          class="flex flex-center title-font q-pb-sm"
          :class="$q.screen.lt.md ? 'text-h5' : 'text-h3'"
        >
      Lista Medicamentos 
    </div>
    <div class="row justify-center q-gutter-sm" :filter="filter">
      

        <q-card class="my-card">
          <div class="q-pa-md">
            <div class="text-purple q-pb-md">
              <q-img
                  src="../../statics/me1.png"
                  
                  
                />
      
            </div>
          </div>
          <q-item>
            <q-item-section avatar class="text-bold"
              >Medicamento:</q-item-section
            >
            <q-item-section
              >Amicacina
            </q-item-section>
            
          </q-item>
          
          <q-item>
            <q-item-section avatar class="text-bold">Farmácias:</q-item-section>
            <q-item-section side class="text-black">3
            </q-item-section>
            
          </q-item>
          <q-card-actions align="right">
            <q-btn
              rounded
              color="white"
              text-color="black"
              label="Ver mais"
              to="/utente/amicacina"
            />
          </q-card-actions>
        </q-card>

            
          
      
 <!--///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////2222222-->
    
        <q-card class="my-card">
          <div class="q-gutter-sm">
            <div class="row text-purple q-gutter-sm" >
              <q-img
                  src="../../statics/para10.jpg"
                  
                  
                />
      
            </div>
          </div>
          <q-item>
            <q-item-section avatar class="text-bold"
              >Medicamento:</q-item-section
            >
            <q-item-section
              >Betaina
            </q-item-section>
            
          </q-item>
          
          <q-item>
            <q-item-section avatar class="text-bold">Farmácias:</q-item-section>
            <q-item-section side class="text-black">3
            </q-item-section>
            
          </q-item>
          <q-card-actions align="right">
            <q-btn
              rounded
              color="white"
              text-color="black"
              label="Ver mais"
              to="/utente/betaina"
            />
            
          </q-card-actions>
        </q-card>
        
      
<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////333333333333-->
      
        <q-card class="my-card">
          <div class="q-pa-md">
            <div class="text-purple q-pb-md" style="font-size: 2em">
              <q-img
                  src="../../statics/para8.jpg"
                  
                  
                />
      
            </div>
          </div>
          <q-item>
            <q-item-section avatar class="text-bold"
              >Medicamento:</q-item-section
            >
            <q-item-section
              >Benzocaina
            </q-item-section>
            
          </q-item>
          
          <q-item>
            <q-item-section avatar class="text-bold">Farmácias:</q-item-section>
            <q-item-section side class="text-black">3
            </q-item-section>
            
          </q-item>
          <q-card-actions align="right">
            <q-btn
              rounded
              color="white"
              text-color="black"
              label="Ver mais"
              to="/utente/benzocaina"
            />
            
          </q-card-actions>
        </q-card>
      
<!--///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////44444444444444444444444-->
      
        <q-card class="my-card">
          <div class="q-pa-md">
            <div class="text-purple q-pb-md" style="font-size: 2em">
              <q-img
                  src="../../statics/para9.jpg"
                  
                  
                />
      
            </div>
          </div>
          <q-item>
            <q-item-section avatar class="text-bold"
              >Medicamento:</q-item-section
            >
            <q-item-section
              >Cantaridina
            </q-item-section>
            
          </q-item>
          
          <q-item>
            <q-item-section avatar class="text-bold">Farmácias:</q-item-section>
            <q-item-section side class="text-black">3
            </q-item-section>
            
          </q-item>
          <q-card-actions align="right">
            <q-btn
              rounded
              color="white"
              text-color="black"
              label="Ver mais"
              to="/utente/cantaridina"
              />
            
          </q-card-actions>
        </q-card>
      
<!--//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////5555555555555555555555-->
      
        <q-card class="my-card">
          <div class="q-pa-sm">
            <div class="text-teal q-pb-sm" style="font-size: 2em">
              <q-img
                  src="../../statics/para6.1.jpg"
                  style="font-size: 4.4em;"
                  
                />
      
            </div>
          </div>
          <q-item>
            <q-item-section avatar class="text-bold"
              >Medicamento:</q-item-section
            >
            <q-item-section
              >Cacina
            </q-item-section>
            
          </q-item>
          
          <q-item>
            <q-item-section avatar class="text-bold">Farmácias:</q-item-section>
            <q-item-section side class="text-black">1
            </q-item-section>
            
          </q-item>
          <q-card-actions align="right">
            <q-btn
              rounded
              color="white"
              text-color="black"
              label="Ver mais"
              to="/utente/amicacina"
            />

            
          </q-card-actions>
        </q-card>
      
<!--/////////////////////////////////////////////////////////////////6666666666666666666666666666666666666666666666666666666666666666666666666666666-->
      
        <q-card class="my-card">
          <div class="q-pa-md">
            <div class="text-purple q-pb-md" style="font-size: 2em">
              <q-img
                  src="../../statics/para3.1.jpg"
                  style="font-size: 4.4em;"
                  
                />
      
            </div>
          </div>
          <q-item>
            <q-item-section avatar class="text-bold"
              >Medicamento:</q-item-section
            >
            <q-item-section
              >Acarboze
            </q-item-section>
            
          </q-item>
          
          <q-item>
            <q-item-section avatar class="text-bold">Farmácias:</q-item-section>
            <q-item-section side class="text-black">3
            </q-item-section>
            
          </q-item>
          <q-card-actions align="right">
            <q-btn
              rounded
              color="white"
              text-color="black"
              label="Ver mais"
              to="/utente/acarboze"
            />
            
          </q-card-actions>
        </q-card>

      
      <!--////////////////////////////////////////////////////77777777777777777777777777777777777777777777777777777777777777777777777777777777-->
      
        <q-card class="my-card">
          <div class="q-gutter-sm">
            <div class="row text-purple q-gutter-sm" >
              <q-img
                  src="../../statics/1.jpg"
                  
                  
                />
      
            </div>
          </div>
          <q-item>
            <q-item-section avatar class="text-bold"
              >Medicamento:</q-item-section
            >
            <q-item-section
              >Betaina
            </q-item-section>
            
          </q-item>
          
          <q-item>
            <q-item-section avatar class="text-bold">Farmácias:</q-item-section>
            <q-item-section side class="text-black">3
            </q-item-section>
            
          </q-item>
          <q-card-actions align="right">
            <q-btn
              rounded
              color="white"
              text-color="black"
              label="Ver mais"
              to="/utente/betaina"
            />
            
          </q-card-actions>
        </q-card>
      
           
  <!--///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->
        <q-card class="my-card">
          <div class="q-gutter-sm">
            <div class="row text-purple q-gutter-sm" >
              <q-img
                  src="../../statics/2.jpg"
                  
                  
                />
      
            </div>
          </div>
          <q-item>
            <q-item-section avatar class="text-bold"
              >Medicamento:</q-item-section
            >
            <q-item-section
              >Betaina
            </q-item-section>
            
          </q-item>
          
          <q-item>
            <q-item-section avatar class="text-bold">Farmácias:</q-item-section>
            <q-item-section side class="text-black">3
            </q-item-section>
            
          </q-item>
          <q-card-actions align="right">
            <q-btn
              rounded
              color="white"
              text-color="black"
              label="Ver mais"
              to="/utente/betaina"
            />
            
          </q-card-actions>
        </q-card>

<!--///////////////////////////////////////////////////////////////8888888888888888888888888888888888888888888888888888888888888888-->
           
        <q-card class="my-card">
          <div class="q-gutter-sm">
            <div class="row text-purple q-gutter-sm" >
              <q-img
                  src="../../statics/3.jpg"
                  
                  
                />
      
            </div>
          </div>
          <q-item>
            <q-item-section avatar class="text-bold"
              >Medicamento:</q-item-section
            >
            <q-item-section
              >Betaina
            </q-item-section>
            
          </q-item>
          
          <q-item>
            <q-item-section avatar class="text-bold">Farmácias:</q-item-section>
            <q-item-section side class="text-black">3
            </q-item-section>
            
          </q-item>
          <q-card-actions align="right">
            <q-btn
              rounded
              color="white"
              text-color="black"
              label="Ver mais"
              to="/utente/betaina"
            />
            
          </q-card-actions>
        </q-card>

<!--////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////!!!!!!!!!!!!!!-->
           
        <q-card class="my-card">
          <div class="q-gutter-sm">
            <div class="row text-purple q-gutter-sm" >
              <q-img
                  src="../../statics/4.jpg"
                  
                  
                />
      
            </div>
          </div>
          <q-item>
            <q-item-section avatar class="text-bold"
              >Medicamento:</q-item-section
            >
            <q-item-section
              >Betaina
            </q-item-section>
            
          </q-item>
          
          <q-item>
            <q-item-section avatar class="text-bold">Farmácias:</q-item-section>
            <q-item-section side class="text-black">3
            </q-item-section>
            
          </q-item>
          <q-card-actions align="right">
            <q-btn
              rounded
              color="white"
              text-color="black"
              label="Ver mais"
              to="/utente/betaina"
            />
            
          </q-card-actions>
        </q-card>
     

      <!--///////////////////////////////////////////////////////////////////////999999999999999999999999999999999999999999999999999999999999-->
           
        <q-card class="my-card">
          <div class="q-gutter-sm">
            <div class="row text-purple q-gutter-sm" >
              <q-img
                  src="../../statics/5.jpg"
                  
                  
                />
      
            </div>
          </div>
          <q-item>
            <q-item-section avatar class="text-bold"
              >Medicamento:</q-item-section
            >
            <q-item-section
              >Betaina
            </q-item-section>
            
          </q-item>
          
          <q-item>
            <q-item-section avatar class="text-bold">Farmácias:</q-item-section>
            <q-item-section side class="text-black">3
            </q-item-section>
            
          </q-item>
          <q-card-actions align="right">
            <q-btn
              rounded
              color="white"
              text-color="black"
              label="Ver mais"
              to="/utente/betaina"
            />
            
          </q-card-actions>
        </q-card>
      

<!--///////////////////////////////////////////10101010101010101001010101010101001010101001100010101001010011001010101010110101010101001-->
           
        <q-card class="my-card">
          <div class="q-gutter-sm">
            <div class="row text-purple q-gutter-sm" >
              <q-img
                  src="../../statics/6.jpg"
                  
                  
                />
      
            </div>
          </div>
          <q-item>
            <q-item-section avatar class="text-bold"
              >Medicamento:</q-item-section
            >
            <q-item-section
              >Betaina
            </q-item-section>
            
          </q-item>
          
          <q-item>
            <q-item-section avatar class="text-bold">Farmácias:</q-item-section>
            <q-item-section side class="text-black">3
            </q-item-section>
            
          </q-item>
          <q-card-actions align="right">
            <q-btn
              rounded
              color="white"
              text-color="black"
              label="Ver mais"
              to="/utente/betaina"
            />
            
          </q-card-actions>
        </q-card>
      

      <!--/////////////////////////////////////////////////////////////////////////////11111111111111111111111111111111111111111111111111111-->
           
        <q-card class="my-card">
          <div class="q-gutter-sm">
            <div class="row text-purple q-gutter-sm" >
              <q-img
                  src="../../statics/9.jpg"
                  
                  
                />
      
            </div>
          </div>
          <q-item>
            <q-item-section avatar class="text-bold"
              >Medicamento:</q-item-section
            >
            <q-item-section
              >Betaina
            </q-item-section>
            
          </q-item>
          
          <q-item>
            <q-item-section avatar class="text-bold">Farmácias:</q-item-section>
            <q-item-section side class="text-black">3
            </q-item-section>
            
          </q-item>
          <q-card-actions align="right">
            <q-btn
              rounded
              color="white"
              text-color="black"
              label="Ver mais"
              to="/utente/betaina"
            />
            
          </q-card-actions>
        </q-card>
      
<!--/////////////////////////////////////////////////////////////////////////////////////////////1212121221221212122112121212121212212121-->
           
        <q-card class="my-card">
          <div class="q-gutter-sm">
            <div class="row text-purple q-gutter-sm" >
              <q-img
                  src="../../statics/8.jpg"
                  
                  
                />
      
            </div>
          </div>
          <q-item>
            <q-item-section avatar class="text-bold"
              >Medicamento:</q-item-section
            >
            <q-item-section
              >Betaina
            </q-item-section>
            
          </q-item>
          
          <q-item>
            <q-item-section avatar class="text-bold">Farmácias:</q-item-section>
            <q-item-section side class="text-black">3
            </q-item-section>
            
          </q-item>
          <q-card-actions align="right">
            <q-btn
              rounded
              color="white"
              text-color="black"
              label="Ver mais"
              to="/utente/betaina"
            />
            
          </q-card-actions>
        </q-card>
      

<!--//////////////////////////////////////////////////////////////////////////////////////////////////////////131313313133131313133131313313131-->
          
        <q-card class="my-card">
          <div class="q-gutter-sm">
            <div class="row text-purple q-gutter-sm" >
              <q-img
                  src="../../statics/10.png"
                  
                  
                />
      
            </div>
          </div>
          <q-item>
            <q-item-section avatar class="text-bold"
              >Medicamento:</q-item-section
            >
            <q-item-section
              >Betaina
            </q-item-section>
            
          </q-item>
          
          <q-item>
            <q-item-section avatar class="text-bold">Farmácias:</q-item-section>
            <q-item-section side class="text-black">3
            </q-item-section>
            
          </q-item>
          <q-card-actions align="right">
            <q-btn
              rounded
              color="white"
              text-color="black"
              label="Ver mais"
              to="/utente/betaina"
            />
            
          </q-card-actions>
        </q-card>
      
      
    <q-card class="my-card">
          <div class="q-pa-md">
            <div class="text-purple q-pb-md">
              <q-img
                  src="../../statics/1.jpg"
                  
                  
                />
      
            </div>
          </div>
          <q-item>
            <q-item-section avatar class="text-bold"
              >Medicamento:</q-item-section
            >
            <q-item-section
              >Micacina
            </q-item-section>
            
          </q-item>
          
          <q-item>
            <q-item-section avatar class="text-bold">Farmácias:</q-item-section>
            <q-item-section side class="text-black">3
            </q-item-section>
            
          </q-item>
          <q-card-actions align="right">
            <q-btn
              rounded
              color="white"
              text-color="black"
              label="Ver mais"
              to="/utente/amicacina"
            />

            
          </q-card-actions>
        </q-card>

    <q-card class="my-card">
          <div class="q-gutter-sm">
            <div class="row text-purple q-gutter-sm" >
              <q-img
                  src="../../statics/2.jpg"
                  
                  
                />
      
            </div>
          </div>
          <q-item>
            <q-item-section avatar class="text-bold"
              >Medicamento:</q-item-section
            >
            <q-item-section
              >Betaina
            </q-item-section>
            
          </q-item>
          
          <q-item>
            <q-item-section avatar class="text-bold">Farmácias:</q-item-section>
            <q-item-section side class="text-black">3
            </q-item-section>
            
          </q-item>
          <q-card-actions align="right">
            <q-btn
              rounded
              color="white"
              text-color="black"
              label="Ver mais"
               to="/utente/betaina"
            />
            
          </q-card-actions>
        </q-card>

    <q-card class="text-body1">
          <div class="q-pa-md">
            <div class="text-purple q-pb-md" style="font-size: 2em">
              <q-img
                  src="../../statics/3.jpg"
                  
                  
                />
      
            </div>
          </div>
          <q-item>
            <q-item-section avatar class="text-bold"
              >Medicamento:</q-item-section
            >
            <q-item-section
              >Benzocaina
            </q-item-section>
            
          </q-item>
          
          <q-item>
            <q-item-section avatar class="text-bold">Farmácias:</q-item-section>
            <q-item-section side class="text-black">3
            </q-item-section>
            
          </q-item>
          <q-card-actions align="right">
            <q-btn
              rounded
              color="white"
              text-color="black"
              label="Ver mais"
              to="/utente/benzocaina"
            />
            
          </q-card-actions>
        </q-card>

    <q-card class="my-card">
          <div class="q-pa-md">
            <div class="text-purple q-pb-md" style="font-size: 2em">
              <q-img
                  src="../../statics/4.jpg"
                  
                  
                />
      
            </div>
          </div>
          <q-item>
            <q-item-section avatar class="text-bold"
              >Medicamento:</q-item-section
            >
            <q-item-section
              >Cantaridina
            </q-item-section>
            
          </q-item>
          
          <q-item>
            <q-item-section avatar class="text-bold">Farmácias:</q-item-section>
            <q-item-section side class="text-black">3
            </q-item-section>
            
          </q-item>
          <q-card-actions align="right">
            <q-btn
              rounded
              color="white"
              text-color="black"
              label="Ver mais"
              to="/utente/cantaridina"
            />
            
          </q-card-actions>
        </q-card>

    <q-card class="my-card">
          <div class="q-pa-sm">
            <div class="text-teal q-pb-sm" style="font-size: 2em">
              <q-img
                  src="../../statics/5.jpg"
                  style="font-size: 4.4em;"
                  
                />
      
            </div>
          </div>
          <q-item>
            <q-item-section avatar class="text-bold"
              >Medicamento:</q-item-section
            >
            <q-item-section
              >Cina
            </q-item-section>
            
          </q-item>
          
          <q-item>
            <q-item-section avatar class="text-bold">Farmácias:</q-item-section>
            <q-item-section side class="text-black">1
            </q-item-section>
            
          </q-item>
          <q-card-actions align="right">
            <q-btn
              rounded
              color="white"
              text-color="black"
              label="Ver mais"
              to="/utente/amicacina"
            />

            
          </q-card-actions>
        </q-card>

    <q-card class="my-card">
          <div class="q-pa-md">
            <div class="text-purple q-pb-md" style="font-size: 2em">
              <q-img
                  src="../../statics/6.jpg"
                  style="font-size: 4.4em;"
                  
                />
      
            </div>
          </div>
          <q-item>
            <q-item-section avatar class="text-bold"
              >Medicamento:</q-item-section
            >
            <q-item-section
              >Acarboze
            </q-item-section>
            
          </q-item>
          
          <q-item>
            <q-item-section avatar class="text-bold">Farmácias:</q-item-section>
            <q-item-section side class="text-black">3
            </q-item-section>
            
          </q-item>
          <q-card-actions align="right">
            <q-btn
              rounded
              color="white"
              text-color="black"
              label="Ver mais"
              to="/utente/acarboze"
            />
            
          </q-card-actions>
        </q-card>

    <q-card class="my-card">
          <div class="q-gutter-sm">
            <div class="row text-purple q-gutter-sm" >
              <q-img
                  src="../../statics/7.jpg"
                  
                  
                />
      
            </div>
          </div>
          <q-item>
            <q-item-section avatar class="text-bold"
              >Medicamento:</q-item-section
            >
            <q-item-section
              >Betaina
            </q-item-section>
            
          </q-item>
          
          <q-item>
            <q-item-section avatar class="text-bold">Farmácias:</q-item-section>
            <q-item-section side class="text-black">3
            </q-item-section>
            
          </q-item>
          <q-card-actions align="right">
            <q-btn
              rounded
              color="white"
              text-color="black"
              label="Ver mais"
              to="/utente/betaina"
            />
            
          </q-card-actions>
        </q-card>

    <q-card class="my-card">
          <div class="q-gutter-sm">
            <div class="row text-purple q-gutter-sm" >
              <q-img
                  src="../../statics/10.png"
                  
                  
                />
      
            </div>
          </div>
          <q-item>
            <q-item-section avatar class="text-bold"
              >Medicamento:</q-item-section
            >
            <q-item-section
              >Betaina
            </q-item-section>
            
          </q-item>
          
          <q-item>
            <q-item-section avatar class="text-bold">Farmácias:</q-item-section>
            <q-item-section side class="text-black">3
            </q-item-section>
            
          </q-item>
          <q-card-actions align="right">
            <q-btn
              rounded
              color="white"
              text-color="black"
              label="Ver mais"
              to="/utente/betaina"
            />
            
    
          </q-card-actions>
        </q-card>

    <q-card class="my-card">
          <div class="q-gutter-sm">
            <div class="row text-purple q-gutter-sm" >
              <q-img
                  src="../../statics/8.jpg"
                  
                  
                />
      
            </div>
          </div>
          <q-item>
            <q-item-section avatar class="text-bold"
              >Medicamento:</q-item-section
            >
            <q-item-section
              >Paracetamol
            </q-item-section>
            
          </q-item>
          
          <q-item>
            <q-item-section avatar class="text-bold">Farmácias:</q-item-section>
            <q-item-section side class="text-black">3
            </q-item-section>
            
          </q-item>
          <q-card-actions align="right">
            <q-btn
              rounded
              color="white"
              text-color="black"
              label="Ver mais"
              to="/utente/betaina"
            />
            
          </q-card-actions>
        </q-card>

    <q-card class="my-card">
          <div class="q-gutter-sm">
            <div class="row text-purple q-gutter-sm" >
              <q-img
                  src="../../statics/9.jpg"
                  
                  
                />
      
            </div>
          </div>
          <q-item>
            <q-item-section avatar class="text-bold"
              >Medicamento:</q-item-section
            >
            <q-item-section
              >Metafetamina
            </q-item-section>
            
          </q-item>
          
          <q-item>
            <q-item-section avatar class="text-bold">Farmácias:</q-item-section>
            <q-item-section side class="text-black">3
            </q-item-section>
            
          </q-item>
          <q-card-actions align="right">
            <q-btn
              rounded
              color="white"
              text-color="black"
              label="Ver mais"
              to="/utente/betaina"
            />
            
          </q-card-actions>
        </q-card>
    </div>
  </div>
 
   
  </q-page>
    
</template>

<script>
//import { ref } from 'vue'

export default {
  data(){
    return{
      filter: ref(''),
      search: '',
    }
  },
  methods: {
    verDialog(){

      this.amic= true

    },
  }
}  
   
</script>

<style lang="sass" scoped>

.my-card
  width: 100%
  max-width: 250px


  
</style>